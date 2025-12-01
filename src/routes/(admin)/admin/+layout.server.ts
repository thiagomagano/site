export async function load({ locals }) {
	// O usuário já foi validado no hooks.server.js
	// Retorna os dados do usuário da sessão
	return {
		user: locals.session?.user || null
	};
}
