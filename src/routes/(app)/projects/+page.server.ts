import type { PageServerLoad } from './$types';

export const prerender = false;

const API_URL = import.meta.env.VITE_API_URL;

export const load: PageServerLoad = async ({ fetch }) => {
	const res = await fetch(API_URL + '/projects');
	const projects = await res.json();

	return { projects };
};
