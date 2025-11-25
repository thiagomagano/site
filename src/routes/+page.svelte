<script>
	import { Avatar } from '@skeletonlabs/skeleton';

	const jobLabel = 'Desenvolvedor Full Stack';
	const description = 'Solucionando problemas na rede mundial de computadores.';
	const buttonText = 'Conheça meu trabalho';
</script>

<svelte:head>
	<title>Thiago Magano - Portfolio - Home</title>
</svelte:head>

<div class="container mx-auto p-16 space-y-8 flex items-center justify-center flex-col text-center">
	<Avatar
		src="/images/avatar.webp"
		width="w-64"
		rounded="rounded-full"
		initials="TM"
		alt="Foto de Thiago Magano"
	/>

	<div class="flex flex-col gap-2">
		<h1 class="h1 text-4xl font-heading-token">Thiago Magano</h1>
		<h2 class="h5 text-secondary-500">{jobLabel}</h2>
	</div>

	<p>{description}</p>

	<div class="flex gap-4">
		<a href="/about" class="btn variant-filled-primary w-full">{buttonText}</a>
	</div>
</div>

<style lang="postcss">
	@reference "tailwindcss";
	:global(html) {
		background-color: theme(--color-gray-100);
	}
</style>
