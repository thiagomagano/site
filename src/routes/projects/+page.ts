import type { PageLoad } from './$types';

const API_URL = "http://localhost:3000/api"

export const load: PageLoad = async ({ fetch }) => {
  const res = await fetch(API_URL + "/projects");
  const projects = await res.json();

  return { projects };
};