<script lang="ts">
	import type { Job } from '$data/jobs';
	import { Accordion } from '@skeletonlabs/skeleton-svelte';

	interface Props {
		job: Job;
	}

	let { job }: Props = $props();
</script>

<div class="flex flex-col gap-4 pt-4">
	<h3 class="h3 text-xl">
		{job.title}
	</h3>
	<h4 class="text-sm flex justify-between text-primary-500">
		<span>{job.func} </span> <span> {job.year} </span>
	</h4>
	<Accordion regionControl="preset-tonal" regionCaret="preset-tonal" regionPanel="preset-tonal">
		<Accordion.Item>
			{#snippet lead()}
						<span class="mt-1 block"
						><iconify-icon icon="mdi:domain" width="24"></iconify-icon>
					</span>
					{/snippet}
			{#snippet summary()}
						Qual é a dessa empresa?
					{/snippet}
			{#snippet content()}
						<p class="leading-loose">{job.descEmployee}</p>
					{/snippet}
		</Accordion.Item>
		<Accordion.Item>
			{#snippet lead()}
						<span class="mt-1 block"
						><iconify-icon icon="mdi:check-all" width="24"></iconify-icon>
					</span>
					{/snippet}
			{#snippet summary()}
						O que eu fiz lá?
					{/snippet}
			{#snippet content()}
						<ul class="list-disc list-inside">
						{#each job.descResults as results}
							<li class="list-item py-2">{@html results}</li>
						{/each}
					</ul>
					{/snippet}
		</Accordion.Item>
		<Accordion.Item>
			{#snippet lead()}
						<span class="mt-1 block"
						><iconify-icon icon="mdi:school-outline" width="24"></iconify-icon>
					</span>
					{/snippet}
			{#snippet summary()}
						O que eu aprendi?
					{/snippet}
			{#snippet content()}
						<p class="leading-loose">{job.descLearns}</p>
					{/snippet}
		</Accordion.Item>
	</Accordion>
</div>
