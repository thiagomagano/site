<script lang="ts">
	import { enhance } from '$app/forms';
	import type { Project } from '$data/projects';
	import { FilePenLine, PackagePlus, Trash } from '@lucide/svelte';

	let { data } = $props();
	const projects = data.projects as Project[];

	function deletarProjeto(e: Event) {
		e.preventDefault();
		console.log('Excluindo projeto...', e.AT_TARGET);
	}
</script>

<main>
	<h1>Projetos</h1>
	<div class="flex w-full items-end justify-end">
		<button type="button" class="btn preset-filled-primary-500">
			<span>Novo Projeto</span>
			<PackagePlus size={18} />
		</button>
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
							<form method="POST" action="/admin/projects/deleteProject" use:enhance>
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
