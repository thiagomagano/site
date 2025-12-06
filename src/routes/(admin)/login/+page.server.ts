import { redirect } from '@sveltejs/kit';
import { authApi } from '$lib/api/auth.js';

export async function load({ locals, url }) {
  if (locals.authenticated) {
    throw redirect(302, url.searchParams.get('redirect') || '/admin');
  }

  return {};
}

export const actions = {
  default: async ({ request, cookies, url }) => {
    const data = await request.formData();
    const email = data.get('email');
    const password = data.get('password');

    if (!email || !password) {
      return {
        error: 'Email e senha são obrigatórios'
      };
    }

    try {
      await authApi.login(email.toString(), password.toString(), cookies);

      // DEBUG: Verifica cookies após login
      console.log('=== DEBUG LOGIN ACTION ===');
      const allCookies = cookies.getAll();
      console.log('Cookies after login:', allCookies.map(c => `${c.name}=${c.value}`));
      console.log('=== END DEBUG LOGIN ===');

      // Redireciona após login bem-sucedido
      const redirectTo = url.searchParams.get('redirect') || '/admin';
      throw redirect(302, redirectTo);
    } catch (error) {
      if (error.status === 302) {
        throw error; // Re-throw redirects
      }

      return {
        error: error.message || 'Erro ao fazer login'
      };
    }
  }
};
