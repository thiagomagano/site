import { error } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ params, fetch }) => {
	const res = await fetch(`http://localhost:3000/api/projects/${params.id}`);

	if (!res.ok) {
		throw error(404, 'Projeto não encontrado');
	}

	const project = await res.json();

	return { project };
};
