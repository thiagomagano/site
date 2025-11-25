<script lang="ts">
	import '../app.css';

	import NavLink from '$lib/components/NavLink.svelte';
	import Navigation from '$lib/components/Navigation.svelte';
	import SocialLinks from '$lib/components/SocialLinks.svelte';

	let { data } = $props();

	const dataAtual = new Date();
	const anoAtual = dataAtual.getFullYear();
</script>

<!-- <h2 class="py-4 pl-8">Thiago Magano</h2>
<hr />
<Navigation />
<SocialLinks iconSize="28" classes="flex p-4 pl-8 align-center gap-2 " /> -->

<div class="h-screen grid grid-rows-[auto_1fr_auto]">
	<header class="flex justify-between m-4">
		<a
			href="/"
			class="btn btn-sm border-b-4 hover:border-b-surface-500 hover:text-opacity-75 font-mono {data.url ===
			'/'
				? 'border-b-primary-500'
				: 'border-b-transparent'}"
		>
			<span class="font-bold tracking-wide">thiagomagano.com.br</span>
		</a>
		<nav class="lg:flex hidden flex-nowrap gap-2">
			<NavLink
				href="/about"
				icon="mdi:toolbox-outline"
				label="Carreira"
				active={data.url === '/about'}
			/>
			<NavLink
				href="/projects"
				icon="mdi:code-tags"
				label="Projetos"
				active={data.url === '/projects'}
			/>

			<NavLink
				href="/contact"
				icon="mdi:message-outline"
				label="Contato"
				active={data.url === '/contact'}
			/>
		</nav>

		<a
			href="/documents/cv.pdf"
			target="_blank"
			class="btn btn-sm bg-primary-500 text-primary-contrast-500 hover:border-b-surface-500 hover:text-opacity-75 font-mono"
			>Baixar Currículo
		</a>

		<!-- <button class="lg:hidden btn btn-sm" aria-label="hamburguer-menu">
			<span>
				<svg viewBox="0 0 100 80" class="fill-token w-4 h-4">
					<rect width="100" height="20" />
					<rect y="30" width="100" height="20" />
					<rect y="60" width="100" height="20" />
          </svg>
          </span>
          </button> -->
	</header>

	<main>
		<slot />
	</main>

	<footer>
		<div class=" bg-opacity-75 text-center">
			<div
				class="container mx-auto py-4 px-5 flex flex-wrap flex-col sm:flex-row justify-center items-center gap-4"
			>
				<p class="text-gray-400 text-sm text-center sm:text-left">© {anoAtual} Thiago Magano</p>

				<SocialLinks iconSize="28" classes="mt-2" />
			</div>
		</div>
	</footer>
</div>
