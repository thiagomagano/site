<script lang="ts">
	import Card from '$lib/components/Card.svelte';
	import type { PageProps } from './$types';

	let { data, form }: PageProps = $props();

	let techInput = $state('');
	let stack: string[] = $state(data.project.stack || []);

	let title = $state(data.project.title || '');
	let subtitle = $state(data.project.subtitle || '');
	let description = $state(data.project.description || '');
	// Parse URLs for form fields
	let link = $state(data.project.link?.replace('https://', '') || '');
	let github = $state(data.project.github?.replace('https://github.com/thiagomagano/', '') || '');
	let imageUrl = $state(data.project.imageUrl || 'dummy.png');

	function addTech() {
		if (!techInput.trim()) return;
		stack.push(techInput.trim());
		techInput = '';
	}

	function removeTech(i: number) {
		stack.splice(i, 1);
	}
</script>

<h1 class="h2 text-center">Editando projeto: {data.project.title}</h1>
<main class="grid w-full place-items-center grid-cols-2">
	<form class="w-full max-w-md space-y-4 p-4" method="POST" action="?/updateProject">
		<fieldset class="space-y-4">
			<label class="label">
				<span class="label-text">Titulo</span>
				<input
					class="input"
					type="text"
					placeholder="Nome significativo"
					name="title"
					bind:value={title}
					required
				/>
			</label>
			<label class="label">
				<span class="label-text">Subtitulo</span>
				<input
					class="input"
					type="text"
					placeholder="Algo engraçadinho"
					name="subtitle"
					bind:value={subtitle}
				/>
			</label>
			<label class="label">
				<span class="label-text">Descrição</span>
				<textarea
					class="textarea rounded-container"
					rows="4"
					placeholder="Descrição breve do projeto"
					name="description"
					bind:value={description}
				></textarea>
			</label>

			<div>
				<label class="label">
					<span class="label-text"> Tecnologias</span>

					<div class="flex gap-2">
						<input
							class="input"
							bind:value={techInput}
							placeholder="Adicionar tecnologia..."
							onkeydown={(e) => e.key === 'Enter' && (e.preventDefault(), addTech())}
						/>
						<button class="btn btn-sm preset-filled" type="button" onclick={addTech}
							>Adicionar</button
						>
					</div>
				</label>

				<div class="flex gap-2 mt-2 flex-wrap">
					{#each stack as tech, i}
						<span class="px-2 py-1 rounded flex items-center gap-2 preset-outlined-success-400-600">
							{tech}
							<button type="button" onclick={() => removeTech(i)}>x</button>
						</span>
					{/each}
				</div>

				<!-- STACK como string JSON -->
				<input type="hidden" name="stack" value={JSON.stringify(stack)} />
			</div>

			<label class="label">
				<!-- Melhorar isso -->
				<span class="label-text">Image Url</span>
				<input
					class="input"
					type="text"
					placeholder="projeto.png"
					name="imageUrl"
					bind:value={imageUrl}
				/>
			</label>
			<label class="label">
				<span class="label-text">Link</span>
				<div class="input-group grid-cols-[auto_1fr_auto]">
					<div class="ig-cell preset-tonal">https://</div>
					<input
						class="ig-input"
						type="text"
						placeholder="thiagomagano.com.br"
						name="link"
						bind:value={link}
					/>
				</div>
			</label>
			<label class="label">
				<span class="label-text">Github</span>
				<div class="input-group grid-cols-[auto_1fr_auto]">
					<div class="ig-cell preset-tonal">https://github.com/thiagomagano/</div>
					<input
						class="ig-input"
						type="text"
						placeholder="site"
						name="github"
						bind:value={github}
					/>
				</div>
			</label>
		</fieldset>

		<fieldset class="flex justify-between items-center">
			<div>
				{#if form?.success}
					<p class="p-2 bg-green-200 text-green-800 rounded">
						{form?.message || 'Projeto atualizado com sucesso!'}
					</p>
				{/if}
				{#if form?.success === false}
					<p class="p-2 bg-red-200 text-red-800 rounded">
						{form?.message || 'Erro ao atualizar projeto'}
					</p>
				{/if}
			</div>
			<div class="flex gap-2">
				<a href={`/admin/projects/${data.project._id}`} class="btn preset-outlined-surface-300-700">
					Cancelar
				</a>
				<button type="submit" class="btn preset-filled-primary-50-950">Salvar alterações</button>
			</div>
		</fieldset>
	</form>
	<div class="max-w-lg">
		<Card
			{title}
			{subtitle}
			{description}
			{stack}
			{imageUrl}
			link={link ? 'https://' + link : ''}
			github={github ? 'https://github.com/thiagomagano/' + github : ''}
		/>
	</div>
</main>
