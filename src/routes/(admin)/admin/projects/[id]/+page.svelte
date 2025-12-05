<script lang="ts">
	import { enhance } from '$app/forms';
	import { goto } from '$app/navigation';
	import type { PageProps } from './$types';
	import Card from '$lib/components/Card.svelte';

	let { data }: PageProps = $props();

	let deleting = $state(false);

	function confirmDelete(event: Event, title: string) {
		if (!confirm(`Tem certeza que deseja excluir este projeto "${title}" ?`)) {
			event.preventDefault();
			return;
		}
		deleting = true;
	}

	let { _id, title, subtitle, description, stack, imageUrl, link, github, createdAt } =
		data.project;
</script>

<h1 class="h2 text-center">{data.project.title}</h1>
<main class="w-full grid grid-cols-2 place-items-center">
	<div class="flex gap-4 flex-col">
		<h3 class="h3 pb-4">Preview</h3>
		<div class="max-w-lg">
			<Card {title} {subtitle} {description} {stack} {imageUrl} {link} {github} />
		</div>
	</div>

	<div class="flex flex-col gap-8">
		<div>
			<pre>
			<p>"_id": {_id}</p>
			<p>"createdAt": {new Date(data.project.createdAt).toLocaleDateString('pt-BR')}</p>
			</pre>
		</div>

		<div class="flex gap-4">
			<a class="btn preset-filled-primary-50-950" href={`/admin/projects/${data.project._id}/edit`}>
				Editar projeto
			</a>

			<form
				method="POST"
				action="?/delete"
				onsubmit={(e) => confirmDelete(e, data.project.title)}
				use:enhance={() => {
					return async ({ result }) => {
						if (result.type === 'success') {
							await goto('/admin/projects');
						}
					};
				}}
			>
				<button type="submit" class="btn preset-filled-error-500" disabled={deleting}>
					{deleting ? 'Excluindo...' : 'Excluir'}
				</button>
			</form>
		</div>
	</div>
</main>
