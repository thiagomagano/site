<script lang="ts">
	import Job from '$lib/components/Job.svelte';
	import { jobs } from '$data/jobs';
	import Headline from '$lib/components/Headline.svelte';
</script>

<section>
	<div class="container py-24 mx-auto max-w-(--breakpoint-lg)">
		<Headline headline="Carreira" description="" />

		<div class="flex flex-col gap-4">
			<h2 class="h2">Resumo Rápido</h2>
			<p>
				Minha trajetória como programador começou em 2020 (na pandemia). Voltei a estudar faculdade
				(Tecnólogo Desenvolvimento Web) e cursos online (Udemy). Desde então, tenho trabalhado
				principalmente com o ecossistema Web: JavaScript, Node.js, TypeScript e frameworks frontend
				(React, Vue, Astro, Svelte).
			</p>
		</div>

		<div class="flex flex-col gap-4 py-8">
			{#each jobs as job}
				<Job {job} />
			{/each}
		</div>

		<div class="flex flex-col gap-4 py-8">
			<h2 class="h2">Próximos Passos</h2>
			<p>
				Atualmente desenvolvo projetos pessoais que resolvem problemas reais, nesses projetos tenho
				explorado outras linguagens e frameworks: PHP (Laravel), C#, Go, Ruby (Rails), ASP.NET Core,
				e integração com LLMs (Claude, ChatGPT, Gemini) para aumentar produtividade. Faço isso para
				continuar aprendendo, me manter atualizado e aumentar minha empregabilidade.
			</p>
			<p>
				Além disso, tenho o sonho de aplicar meus conhecimentos em projetos que tenham impacto
				positivo real na vida das pessoas, principalmente as mais humildes.
			</p>
		</div>
		<div class="flex flex-col gap-4 py-4">
			<h2 class="h2">Eai, curtiu?</h2>
			<p>
				Caso tu tenha se interessado, você pode entrar contato comigo,<br />
				Vai ser um prazer conversar contigo.
			</p>
			<div class="py-4 flex gap-4 flex-wrap md:flex-1">
				<a class="btn preset-filled-primary-500 grow" href="/contact">Fale comigo</a>
				<a class="btn preset-filled-primary-500 grow" href="/projects">Conheça meus projetos</a>
			</div>
		</div>
	</div>
</section>
