<script lang="ts">
	import { enhance } from '$app/forms';
	import type { Project } from '$data/projects';
	import { FilePenLine, PackagePlus, Trash } from '@lucide/svelte';

	let { data } = $props();
	const projects = data.projects as Project[];

	let deletingId: string | undefined = undefined;

	function confirmDelete(event: Event, id: string) {
		if (!confirm('Tem certeza que deseja excluir este projeto?')) {
			event.preventDefault();
			return;
		}
		deletingId = id;
	}
</script>

<main>
	<h1>Projetos</h1>
	<div class="flex w-full items-end justify-end">
		<a href="/admin/projects/new" type="button" class="btn preset-filled-primary-500">
			<span>Novo Projeto</span>
			<PackagePlus size={18} />
		</a>
	</div>

	<div class="table-wrap">
		<table class="table caption-top">
			<caption class="pt-4">Projetos</caption>
			<thead>
				<tr>
					<th>Titulo</th>
					<th>Links</th>
					<th>Ações</th>
				</tr>
			</thead>
			<tbody class="[&>tr]:hover:preset-tonal-primary">
				{#each projects as project}
					<tr>
						<td><a href={'/admin/projects/' + project._id}>{project.title}</a></td>
						<td
							><a class="text-indigo-500 hover:underline" href={project.link}>Demo</a> |
							<a class="text-indigo-500 hover:underline" href={project.github}>Github</a></td
						>
						<td class="flex gap-2">
							<button type="button" class="btn-icon" title="Edit" aria-label="Edit">
								<FilePenLine />
							</button>
							<form
								method="POST"
								action="/admin/projects/deleteProject"
								onsubmit={(e) => confirmDelete(e, project._id)}
							>
								<input type="hidden" name="id" value={project._id} />
								<button
									formaction="?/deleteProject"
									type="submit"
									class="btn-icon"
									title="Delete"
									aria-label="Delete"
								>
									<Trash />
								</button>
							</form>
						</td>
					</tr>
				{/each}
			</tbody>
			<tfoot>
				<tr>
					<td colspan="2">Total</td>
					<td>{projects.length} Projetos</td>
				</tr>
			</tfoot>
		</table>
	</div>
</main>
