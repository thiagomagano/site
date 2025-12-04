import { apiClient } from '$lib/api/client';
import type { Actions } from './$types';

export const actions: Actions = {
	createProject: async ({ request, cookies }) => {
		const formData = await request.formData();
		const title = formData.get('title');
		const subtitle = formData.get('subtitle');
		const description = formData.get('description');
		const imageUrl = formData.get('imageUrl');
		const link = formData.get('link');
		const github = formData.get('github');
		const stack = formData.get('stack');

		//Fazer algumas validações básicas.

		try {
			const res = await apiClient.post(
				`/projects/`,
				{
					title,
					subtitle,
					description,
					imageUrl,
					link,
					github,
					stack
				},
				{},
				cookies
			);
			return {
				message: res.message,
				sucess: true
			};
		} catch (error) {
			console.error('Erro ao criar projeto: ', error);
			return {
				error,
				sucess: false
			};
		}
	}
};
