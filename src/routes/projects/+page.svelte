<script lang="ts">
	import Card from '$lib/components/Card.svelte';

	import Headline from '$lib/components/Headline.svelte';

	import type { PageProps } from './$types';

	let { data }: PageProps = $props();
	let { projects } = data;
</script>

<section class="">
	<div class="container py-16 mx-auto max-w-(--breakpoint-lg)">
		<Headline headline="Projetos" description="Aqui estão os principais projetos que desenvolvi" />

		<div class="grid lg:grid-cols-2 grid-cols-1 gap-4">
			{#each projects as { title, subtitle, description, stack, imageUrl, link, github }}
				<Card {title} {subtitle} {description} {stack} {imageUrl} {link} {github} />
			{/each}
		</div>
	</div>
</section>
