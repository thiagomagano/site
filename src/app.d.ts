declare global {
	namespace App {
		interface Locals {
			user: {
				id: number;
				email: string;
				name: string;
				role: string;
			} | null;
			authenticated: boolean;
			project: {
				_id?: string;
				title: string;
				subtitle: string;
				description: string;
				stack?: string[];
				imageUrl?: string;
				link?: string;
				github: string;
			};
		}
	}
}

export {};
