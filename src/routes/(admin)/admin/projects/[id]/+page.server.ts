import { error } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';
import type { Project } from '$data/projects';

export const load: PageServerLoad = async ({ params, fetch }) => {
	const res = await fetch(`http://localhost:3000/api/projects/${params.id}`);

	if (!res.ok) {
		throw error(404, 'Projeto não encontrado');
	}

	const projeto: Project = await res.json();

	return { projeto };
};
