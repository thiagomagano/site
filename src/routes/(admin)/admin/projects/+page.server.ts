import { redirect, type Action } from '@sveltejs/kit';
import { apiClient } from '$lib/api/client.js';

export async function load({ locals, cookies }) {
	// O hook já verifica autenticação, mas podemos verificar novamente
	if (!locals.authenticated) {
		throw redirect(302, '/login');
	}

	try {
		// Requisição autenticada - cookies são passados automaticamente
		const projects = await apiClient.get('/projects', {}, cookies);
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

export const actions = {
	deleteProject: async ({ request, cookies }) => {
		const formData = await request.formData();
		const id = formData.get('id');

		if (!id || typeof id !== 'string') {
			return { success: false, message: 'ID inválido' };
		}

		const res = await apiClient.delete(`/projects/${id}`, {}, cookies);
		if (!res.ok) {
			console.log('Deletando projeto: ', id);
			return { success: false, message: 'Erro ao excluir' };
		}

		return { success: true };
	}
};
