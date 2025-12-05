import { apiClient } from '$lib/api/client';
import { normalizeStack } from '$lib/utils/projects';

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

		const stackRaw = formData.get('stack');
		const stack = JSON.parse(stackRaw as string);
		// Normalizar para simple-icons
		const normalizedStack = normalizeStack(stack);

		//Fazer algumas validações básicas.

		try {
			const res = await apiClient.post(
				`/projects/`,
				{
					title,
					subtitle,
					description,
					imageUrl,
					link: `https://${link}`,
					github: `https://github.com/thiagomagano/${github}`,
					stack: normalizedStack
				},
				{},
				cookies
			);

			return {
				response: res,
				success: true
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
