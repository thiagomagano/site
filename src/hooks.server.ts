import { authApi } from '$lib/api/auth.js';
import { redirect } from '@sveltejs/kit';

export async function handle({ event, resolve }) {
	// Verifica autenticação e adiciona user ao locals
	const response = await authApi.getCurrentUser(event.cookies);

	if (response?.user) {
		event.locals.user = response.user;
		event.locals.authenticated = true;
	} else {
		event.locals.user = null;
		event.locals.authenticated = false;
	}

	// Protege rotas que começam com /admin
	if (event.url.pathname.startsWith('/admin')) {
		if (!event.locals.authenticated) {
			throw redirect(302, `/login?redirect=${event.url.pathname}`);
		}
	}

	return resolve(event);
}
