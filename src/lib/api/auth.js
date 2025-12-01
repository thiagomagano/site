import { apiClient } from './client.js';

export const authApi = {
	async login(email, password, cookies) {
		return await apiClient.post('/auth/login', { email, password }, {}, cookies);
	},

	async logout(cookies) {
		return await apiClient.post('/auth/logout', {}, {}, cookies);
	},

	async getCurrentUser(cookies) {
		try {
			return await apiClient.get('/auth/me', {}, cookies);
		} catch (error) {
			if (error.status === 401) {
				return null;
			}
			throw error;
		}
	}
};
