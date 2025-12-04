import { apiClient } from '$lib/api/client';
import type { Actions } from './$types';

function normalizeSimpleIcon(name: string): string {
	const mapping: Record<string, string> = {
		node: 'nodedotjs',
		js: 'javascript',
		ts: 'typescript',
		express: 'express',
		react: 'react',
		svelte: 'svelte',
		tailwind: 'tailwindcss',
		laravel: 'laravel',
		pocketbase: 'pocketbase',
		mongo: 'mongodb',
		mysql: 'mysql',
		postgres: 'postgresql',
		prisma: 'prisma',
		bun: 'bun',
		hetzner: 'hetzner',
		astro: 'astro',
		sqlite: 'sqlite',
		drizzle: 'drizzle',
		vercel: 'vercel',
		go: 'go',
		c: 'c'
	};

	const normalized = name.toLowerCase().replace(/[^a-z0-9]/g, '');

	return mapping[normalized] ?? normalized;
}

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
		const normalizedStack = stack.map(normalizeSimpleIcon);

		// Agora pode salvar no DB / API
		console.log(normalizedStack);

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
					stack: normalizedStack
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
