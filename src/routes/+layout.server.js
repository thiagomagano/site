export async function load({ locals }) {
	return {
		user: locals.user,
		authenticated: locals.authenticated
	};
}
