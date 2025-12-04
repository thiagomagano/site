export interface Project {
	_id?: string;
	title: string;
	subtitle: string;
	description: string;
	stack?: string[];
	imageUrl?: string;
	link?: string;
	github: string;
}
