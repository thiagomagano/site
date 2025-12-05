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

      // Se a resposta tiver Set-Cookie, atualiza os cookies do SvelteKit
      if (cookies && response.headers.get('set-cookie')) {
        const setCookieHeader = response.headers.get('set-cookie');

        // Melhor parsing do cookie - tenta múltiplos formatos
        // Express-session geralmente retorna: sessionId=valor; Path=/; HttpOnly; SameSite=Lax
        const cookieName = 'sessionId'; // Nome do cookie de sessão

        // Tenta extrair o valor do cookie de forma mais robusta
        // Formato esperado: sessionId=valor; ou sessionId=valor; Path=...
        const cookieMatch = setCookieHeader.match(
          new RegExp(`${cookieName}=([^;\\s]+)`, 'i')
        );

        if (cookieMatch && cookieMatch[1]) {
          const cookieValue = cookieMatch[1];

          // Extrai atributos do cookie se presentes
          const pathMatch = setCookieHeader.match(/Path=([^;]+)/i);
          const httpOnlyMatch = setCookieHeader.match(/HttpOnly/i);
          const sameSiteMatch = setCookieHeader.match(/SameSite=([^;]+)/i);
          const secureMatch = setCookieHeader.match(/Secure/i);
          const maxAgeMatch = setCookieHeader.match(/Max-Age=(\d+)/i);

          const cookieOptions = {
            path: pathMatch ? pathMatch[1].trim() : '/',
            httpOnly: !!httpOnlyMatch,
            sameSite: sameSiteMatch ? sameSiteMatch[1].trim().toLowerCase() : 'lax',
            secure: secureMatch ? true : (env.NODE_ENV === 'production' || env.PUBLIC_NODE_ENV === 'production'),
            maxAge: maxAgeMatch ? parseInt(maxAgeMatch[1]) : 14 * 24 * 60 * 60 // 14 dias default
          };

          cookies.set(cookieName, cookieValue, cookieOptions);
        }
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
