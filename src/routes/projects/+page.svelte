<script>
	import Card from '$lib/components/Card.svelte';
	import { projects } from '$data/projects';
	import Headline from '$lib/components/Headline.svelte';
</script>

<section class="">
	<div class="container py-16 mx-auto max-w-(--breakpoint-lg)">
		<Headline
			headline="Projetos"
			description="Aqui estão os principais projetos que desenvolvi, você pode clicar nos cards para saber mais
				informações sobre eles."
		/>

		<div class="grid lg:grid-cols-2 grid-cols-1 gap-4">
			{#each projects as { logo, title, subtitle, description, repo, url, stack, slug }}
				<Card {logo} {title} {subtitle} {description} {repo} {url} {stack} />
			{/each}
		</div>
	</div>
</section>
