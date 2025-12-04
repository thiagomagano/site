<script lang="ts">
	interface Props {
		title: string;
		subtitle?: string;
		description: string;
		stack?: string[];
		imageUrl?: string;
		link?: string;
		github: string;
	}

	let {
		title = 'Title',
		subtitle = 'Subtitle',
		description = 'A DESCRIPTION HERE',
		stack = ['javascript, css, html'],
		github = '',
		link = '',
		imageUrl = 'dummy.png'
	}: Props = $props();

	const ICON_SIZE = '36px';
</script>

<div class="card flex flex-col gap-4 p-4 shadow-lg preset-outlined-primary-50-950 text-center">
	<div
		class="flex items-center justify-center h-44 dark:bg-transparent dark:mx-0 bg-primary-500 -mx-4"
	>
		<img
			class="rounded w-80 h-44 align-middle object-contain object-center"
			src="/images/logos/{imageUrl}"
			alt="content"
		/>
	</div>

	<div class="text-center">
		<h2 class="text-lg font-medium title-font">{title}</h2>
		<h3 class="tracking-widest text-primary-500 text-xs font-medium title-font mb-1">
			{subtitle}
		</h3>
	</div>

	<p class="leading-relaxed text-base grow">
		{description}
	</p>

	<ul class="flex gap-4 items-center justify-center">
		{#each stack as tech}
			<li>
				<iconify-icon icon="simple-icons:{tech}" width={ICON_SIZE}></iconify-icon>
			</li>
		{/each}
	</ul>
	<hr class="opacity-50 -mx-4" />
	<div class="flex gap-4 items-center justify-between">
		<a
			href={link}
			target="_blank"
			class="flex items-center gap-2 hover:underline hover:text-primary-500"
		>
			<iconify-icon icon="mdi:open-in-new" width={ICON_SIZE}></iconify-icon> <span>Visite</span>
		</a>
		<a
			href={github}
			target="_blank"
			aria-label="github"
			class="flex items-center gap-2 hover:underline hover:text-primary-500"
		>
			<iconify-icon icon="mdi:github" width={ICON_SIZE} class=""></iconify-icon>
			<span>Código</span>
		</a>
	</div>
</div>
