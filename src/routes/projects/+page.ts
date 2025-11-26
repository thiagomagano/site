import type { PageLoad } from './$types';

export const prerender = false;
export const ssr = false;

export const load: PageLoad = async ({ fetch }) => {
  const res = await fetch("api/projects");
  const projects = await res.json();

  return { projects };
};