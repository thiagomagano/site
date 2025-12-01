import { redirect } from '@sveltejs/kit';
import { authApi } from '$lib/api/auth.js';

export async function POST({ cookies }) {
	await authApi.logout(cookies);
	throw redirect(302, '/login');
}
