import { redirect } from '@sveltejs/kit';
import { apiClient } from '$lib/api/client.js';
import type { Project } from '$data/projects.js';

export async function load({ locals, cookies }) {
	// O hook já verifica autenticação, mas podemos verificar novamente
	if (!locals.authenticated) {
		throw redirect(302, '/login');
	}

	try {
		// Requisição autenticada - cookies são passados automaticamente
		const projects = await apiClient.get('/projects', {}, cookies);
		console.log(projects);
		return {
			projects,
			user: locals.user
		};
	} catch (error) {
		console.error('Erro ao carregar projetos:', error);
		return {
			projects: [],
			user: locals.user
		};
	}
}
