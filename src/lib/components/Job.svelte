<script lang="ts">
	import { ChevronDownIcon } from '@lucide/svelte';
	import type { Job } from '$data/jobs';
	import { Accordion } from '@skeletonlabs/skeleton-svelte';
	import { slide } from 'svelte/transition';

	interface Props {
		job: Job;
	}

	let { job }: Props = $props();
</script>

<div class="flex flex-col gap-4 pt-4">
	<h3 class="h3 text-xl">
		{job.title}
	</h3>
	<h4 class="text-sm flex justify-between text-primary-300">
		<span>{job.func} </span> <span> {job.year} </span>
	</h4>
	<Accordion>
		<Accordion.Item value={job.title}>
			<h3>
				<Accordion.ItemTrigger class="font-bold flex items-center justify-between gap-2">
					<span class="mt-1 block"
						><iconify-icon icon="mdi:domain" width="24"></iconify-icon>
					</span>
					Qual é a dessa empresa?
					<Accordion.ItemIndicator class="group">
						<ChevronDownIcon class="h-5 w-5 transition group-data-[state=open]:rotate-180" />
					</Accordion.ItemIndicator>
				</Accordion.ItemTrigger>
			</h3>

			<Accordion.ItemContent>
				{#snippet element(attributes)}
					{#if !attributes.hidden}
						<div {...attributes} transition:slide={{ duration: 150 }}>
							{job.descEmployee}
						</div>
					{/if}
				{/snippet}
			</Accordion.ItemContent>
		</Accordion.Item>

		<Accordion.Item value={job.descEmployee}>
			<h3>
				<Accordion.ItemTrigger class="font-bold flex items-center justify-between gap-2">
					<span class="mt-1 block"
						><iconify-icon icon="mdi:check-all" width="24"></iconify-icon>
					</span>
					O que eu fiz lá?
					<Accordion.ItemIndicator class="group">
						<ChevronDownIcon class="h-5 w-5 transition group-data-[state=open]:rotate-180" />
					</Accordion.ItemIndicator>
				</Accordion.ItemTrigger>
			</h3>
			<Accordion.ItemContent>
				{#snippet element(attributes)}
					{#if !attributes.hidden}
						<div {...attributes} transition:slide={{ duration: 150 }}>
							<ul class="list-disc list-inside">
								{#each job.descResults as results}
									<li class="list-item py-2">{results}</li>
								{/each}
							</ul>
						</div>
					{/if}
				{/snippet}
			</Accordion.ItemContent>
		</Accordion.Item>

		<Accordion.Item value={job.descLearns}>
			<h3>
				<Accordion.ItemTrigger class="font-bold flex items-center justify-between gap-2">
					<iconify-icon icon="mdi:school-outline" width="24"></iconify-icon>
					O que eu aprendi?
					<Accordion.ItemIndicator class="group">
						<ChevronDownIcon class="h-5 w-5 transition group-data-[state=open]:rotate-180" />
					</Accordion.ItemIndicator>
				</Accordion.ItemTrigger>
			</h3>

			<Accordion.ItemContent>
				{#snippet element(attributes)}
					{#if !attributes.hidden}
						<div {...attributes} transition:slide={{ duration: 150 }}>
							<p class="leading-loose">{job.descLearns}</p>
						</div>
					{/if}
				{/snippet}
			</Accordion.ItemContent>
		</Accordion.Item>
	</Accordion>
</div>
