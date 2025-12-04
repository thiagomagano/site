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

export const projects: Project[] = [
	{
		title: 'Cia do Fusca',
		subtitle: 'Tu já andou de fusca?',
		description:
			'Nesse projeto utilizei as tecnologias mais inovadoras do mercado para criar o website da loja de carros clássicos Cia do Fusca.',
		stack: ['javascript', 'svelte', 'tailwindcss', 'pocketbase', 'amazonaws'],
		imageUrl: 'ciadofusca.png',
		link: 'https://ciadofusca.com.br',
		github: 'https://github.com/thiagomagano/ciadofusca'
	},
	{
		title: 'Pokémon Team Builder',
		stack: ['react', 'tsnode', 'prisma', 'postgresql', 'vercel'],
		subtitle: 'Quem é este pokémon?',
		description:
			'Eu precisava testar minhas habilidades em React e Nodejs, então peguei uma coisa divertida de construir e criei um aplicativo para gerenciar times de pokémon.',
		imageUrl: 'pokemon.png',
		link: 'https://pokemonteambuilder.vercel.app/',
		github: 'https://github.com/thiagomagano/pokemon-team-builder-frontend'
	}
];
