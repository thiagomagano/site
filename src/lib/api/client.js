import { env } from '$env/dynamic/private';
const API_URL = env.API_URL || 'http://localhost:3000/api';

class ApiClient {
  constructor(baseURL) {
    this.baseURL = baseURL;
  }

  /**
   * Faz requisição para a API, passando cookies do request do SvelteKit
   * @param {string} endpoint - Endpoint da API
   * @param {object} options - Opções do fetch
   * @param {Cookies} cookies - Objeto cookies do SvelteKit (event.cookies)
   */
  async request(endpoint, options = {}, cookies = null) {
    const url = `${this.baseURL}${endpoint}`;

    const headers = {
      'Content-Type': 'application/json',
      ...options.headers
    };

    // Passa cookies do SvelteKit para a API
    if (cookies) {
      const cookieHeader = cookies
        .getAll()
        .map((c) => `${c.name}=${c.value}`)
        .join('; ');

      if (cookieHeader) {
        headers['Cookie'] = cookieHeader;
      }
    }

    const config = {
      ...options,
      headers
    };

    try {
      const response = await fetch(url, config);

      // DEBUG: Tenta acessar Set-Cookie de diferentes formas
      console.log('=== DEBUG COOKIE ===');
      console.log('Endpoint:', endpoint);
      console.log('Response status:', response.status);

      // Tenta diferentes formas de acessar Set-Cookie
      const setCookie1 = response.headers.get('set-cookie');
      const setCookie2 = response.headers.get('Set-Cookie');

      // Tenta acessar headers raw (se disponível)
      let setCookieHeader = null;
      if (response.headers.raw && typeof response.headers.raw === 'function') {
        const rawHeaders = response.headers.raw();
        setCookieHeader = rawHeaders['set-cookie'] || rawHeaders['Set-Cookie'];
        if (Array.isArray(setCookieHeader)) {
          setCookieHeader = setCookieHeader.join(', ');
        }
      } else if (setCookie1) {
        setCookieHeader = setCookie1;
      } else if (setCookie2) {
        setCookieHeader = setCookie2;
      }

      console.log('Set-Cookie (get):', setCookie1 || setCookie2);
      console.log('Set-Cookie (raw):', setCookieHeader);
      console.log('All response headers:', Object.fromEntries(response.headers.entries()));

      // Se a resposta tiver Set-Cookie, atualiza os cookies do SvelteKit
      if (cookies && setCookieHeader) {
        console.log('Raw Set-Cookie:', setCookieHeader);

        // Processa o cookie
        const allCookies = setCookieHeader.split(',').map(c => c.trim());
        console.log('Parsed cookies array:', allCookies);

        for (const cookieString of allCookies) {
          const nameValueMatch = cookieString.match(/^([^=]+)=([^;]+)/);
          if (nameValueMatch) {
            const cookieName = nameValueMatch[1].trim();
            const cookieValue = nameValueMatch[2].trim();

            console.log(`Found cookie: ${cookieName} = ${cookieValue}`);

            const pathMatch = cookieString.match(/Path=([^;]+)/i);
            const httpOnlyMatch = cookieString.match(/HttpOnly/i);
            const sameSiteMatch = cookieString.match(/SameSite=([^;]+)/i);
            const secureMatch = cookieString.match(/Secure/i);
            const maxAgeMatch = cookieString.match(/Max-Age=(\d+)/i);

            const cookieOptions = {
              path: pathMatch ? pathMatch[1].trim() : '/',
              httpOnly: !!httpOnlyMatch,
              sameSite: sameSiteMatch ? sameSiteMatch[1].trim().toLowerCase() : 'lax',
              secure: secureMatch ? true : (env.NODE_ENV === 'production' || env.PUBLIC_NODE_ENV === 'production'),
            };

            if (maxAgeMatch) {
              cookieOptions.maxAge = parseInt(maxAgeMatch[1]);
            }

            console.log(`Setting cookie ${cookieName} with options:`, cookieOptions);
            cookies.set(cookieName, cookieValue, cookieOptions);
            console.log(`Cookie ${cookieName} set successfully`);
          }
        }

        const allCookiesAfter = cookies.getAll();
        console.log('All cookies after setting:', allCookiesAfter.map(c => `${c.name}=${c.value}`));
        console.log('=== END DEBUG ===');
      } else {
        console.log('No Set-Cookie header found in response');
        console.log('=== END DEBUG ===');
      }

      const contentType = response.headers.get('content-type');
      const data = contentType?.includes('application/json') ? await response.json() : null;

      if (!response.ok) {
        throw {
          status: response.status,
          message: data?.message || 'Erro na requisição',
          data
        };
      }

      return data;
    } catch (error) {
      if (error.status) {
        throw error;
      }
      throw {
        status: 500,
        message: 'Erro de conexão com o servidor',
        error
      };
    }
  }

  get(endpoint, options = {}, cookies = null) {
    return this.request(endpoint, { ...options, method: 'GET' }, cookies);
  }

  post(endpoint, data, options = {}, cookies = null) {
    return this.request(
      endpoint,
      {
        ...options,
        method: 'POST',
        body: JSON.stringify(data)
      },
      cookies
    );
  }

  put(endpoint, data, options = {}, cookies = null) {
    return this.request(
      endpoint,
      {
        ...options,
        method: 'PUT',
        body: JSON.stringify(data)
      },
      cookies
    );
  }

  delete(endpoint, options = {}, cookies = null) {
    return this.request(endpoint, { ...options, method: 'DELETE' }, cookies);
  }
}

export const apiClient = new ApiClient(API_URL);
