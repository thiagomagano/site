export interface Job {
	title: string;
	func: string;
	location: string;
	year: string;
	descEmployee: string;
	descResults: string[];
	descLearns: string;
}

export const jobs: Job[] = [
	{
		title: 'Desenvelvedor Full Stack',
		func: 'Capaz Estúdio',
		location: 'Alvorada',
		year: '2024 - Presente',
		descEmployee: 'Agência de Marketing Digital e Publicidade.',
		descResults: [
			'Denseolvimento de sites e sistemas para empresas de pequeno e médio porte.',
			'Como único desenvolvedor fiz a maioria dos projetos junto com o time de design na empresa. Tive decisões téncnicas em todas parte dos projetos desde escopo, design e tecnologias utilizadas'
		],
		descLearns:
			'Nessa minha jornada na agência sinto que tecnicamente foi onde mais aprendi. Ter que montar um projeto do zero, lidar com cliente,  passar por cada problema de implementação e criar uma solução, sinto que me ajudou demais na minha resolução de problema e me fez acreditar que posso construir qualquer coisa, só vai depender do tempo e da minha dedicação.'
	},

	{
		title: 'Tutor de Desenvolvimento Web Full-Stack',
		func: 'Driven Education',
		location: 'Remoto',
		year: '2022 - 2023',
		descEmployee:
			'A Driven é uma edtech que oferece um bootcamp de desenvolvimento web full-stack com duração de 9 meses, que ensina desde o básico de programação até os tópicos mais avançados. Também conta treinamento de soft skills e empregabilidade. O curso foi preparado para entregar o Dev mais pronto possível para o mercado. Alunos Driven já foram empregados por empresas como ifood, Quinto Andar, Stone, Olx, dentre muitas outras.',
		descResults: [
			'Ajudei cerca de 100 Alunos  a conseguirem seu primeiro emprego em programação.',
			'Fiz Tutoria (Suporte total do aluno com a escola, Orientação, Resolução de Dúvidas, Produção de conteúdo) em toda stack do curso, html, CSS, React, Nodejs, banco de dados SQL, NoSQL, Orientação Objetos, Tests, Docker, AWS.',
			'Correção detalhada de implementação, revisão de código de mais de 30 projetos diferentes dos alunos',
			'Fiz parte de diversos projetos internos de melhoria administrativa como automação de registro presença e automação de planilhas do google sheets.'
		],
		descLearns:
			'Na minha passagem pela Driven desenvolvi muito as minhas "People Skills", comecei a me comunicar melhor, falar pra um grande grupo de pessoa, aprendi a ter conversas dificeis, desenvolver minha paciência e empatia pelas pessoas. Além de aprender muito conteúdo técnico, afinal a melhor forma de aprender é ensinando alguém. Foi muito gratificante ver que ajudei pessoas a conseguirem seu primeiro emprego como programação e aprender demais nesse processo.'
	},
	{
		title: 'Desenvolvedor Front-End',
		func: 'SENAI - RS',
		location: 'Porto Alegre',
		year: '2020 - 2022',
		descEmployee:
			'O Serviço Nacional de Aprendizagem Industrial do Rio Grande do Sul (SENAI-RS) está a mais de 70 anos fortalecendo a industria e o desenvolvimento do país por meio de cursos profissionalizantes.',
		descResults: [
			'Trabalhei como front-end no desenvolvimento, implementação e correção de mais de 50 cursos para plataforma de aprendizagem do SENAI-RS',
			'Conversão de mais de 30 animações em Flash para tecnologias nativas da Web (HTML, CSS, Javascript)',
			'Trabalhei com a equipe no desenvolvimento de um aplicativo que ajudava os colaboradores a informarem se já haviam tomado a vacina do Covid19, utlizando ReactJS.'
		],
		descLearns:
			'No SENAI-RS foi minha primeira experiência como desenvolvedor e em uma empresa grande, então tudo era muito novo e todo dia um aprendizado diferente. O que posso destacar é que aprendi a trabalhar melhor em equipe, estimar prazos de tarefas e ter muita resiliência para trabalhar em uma plataforma mais antiga e dar manutenção em códigos legado.'
	}
];
