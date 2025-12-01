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
				const setCookieHeaders = response.headers.get('set-cookie');
				// Express-session retorna um cookie, precisamos atualizar
				const cookieName = 'sessionId'; // Nome do cookie de sessão
				const match = setCookieHeaders.match(new RegExp(`${cookieName}=([^;]+)`));
				if (match) {
					cookies.set(cookieName, match[1], {
						path: '/',
						httpOnly: true,
						sameSite: 'lax',
						secure: process.env.NODE_ENV === 'production',
						maxAge: 14 * 24 * 60 * 60 // 14 dias
					});
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
