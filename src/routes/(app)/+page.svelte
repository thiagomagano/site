<script lang="ts">
	import { Avatar } from '@skeletonlabs/skeleton-svelte';

	const jobLabel = 'Desenvolvedor Full Stack';
	const description = 'Solucionando problemas na rede mundial de computadores.';
</script>

<svelte:head>
	<title>Thiago Magano - Portfolio - Home</title>
</svelte:head>

<div class="container mx-auto p-16 space-y-8 flex items-center justify-center flex-col text-center">
	<Avatar class="size-50 background-cover">
		<Avatar.Image src="/images/avatar.webp" alt="Foto de Perfil Thiago Magano" />
		<Avatar.Fallback>TM</Avatar.Fallback>
	</Avatar>

	<div class="flex flex-col gap-2">
		<h1 class="h1">Thiago Magano</h1>
		<h2 class="h2 text-primary-500">{jobLabel}</h2>
	</div>

	<p>{description}</p>

	<div class="flex gap-4 justify-between w-full max-w-[400px]">
		<a href="/about" class="btn btn-base preset-outlined-primary-500 w-full">Carreira</a>
		<a href="/projects" class="btn preset-outlined-primary-500 w-full">Projetos</a>
		<a href="/contact" class="btn btn-base preset-outlined-primary-500 w-full">Contato</a>
	</div>
</div>

<style lang="postcss">
	@reference "tailwindcss";
</style>
