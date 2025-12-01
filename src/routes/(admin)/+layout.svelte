<script lang="ts">
	import '../../app.css';

	import SocialLinks from '$lib/components/SocialLinks.svelte';

	let { children } = $props();

	const dataAtual = new Date();
	const anoAtual = dataAtual.getFullYear();
</script>

<div class="min-h-screen grid grid-rows-[auto_1fr_auto]">
	<main>
		{@render children()}
	</main>

	<footer>
		<div class=" bg-opacity-75 text-center">
			<div
				class="container mx-auto py-4 px-5 flex flex-wrap flex-col sm:flex-row justify-center items-center gap-4"
			>
				<p class="text-gray-400 text-sm text-center sm:text-left">© {anoAtual} Thiago Magano</p>

				<SocialLinks iconSize="24" classes="mt-2" />
			</div>
		</div>
	</footer>
</div>
