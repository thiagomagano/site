<script lang="ts">
	let { form } = $props();

	let techInput = $state('');
	let stack: string[] = $state([]);

	function addTech() {
		if (!techInput.trim()) return;
		stack.push(techInput.trim());
		techInput = '';
	}

	function removeTech(i: number) {
		stack.splice(i, 1);
	}
</script>

<main class="grid w-full place-items-center">
	<h1 class="h2">Criando novo projeto</h1>

	<form class="w-full max-w-md space-y-4 p-4" method="POST" action="?/createProject">
		<fieldset class="space-y-4">
			<label class="label">
				<span class="label-text">Titulo</span>
				<input class="input" type="text" placeholder="Nome significativo" name="title" />
			</label>
			<label class="label">
				<span class="label-text">Subtitulo</span>
				<input class="input" type="text" placeholder="Algo engraçadinho" name="subtitle" />
			</label>
			<label class="label">
				<span class="label-text">Descrição</span>
				<textarea
					class="textarea rounded-container"
					rows="4"
					placeholder="Descrição breve do projeto"
					name="description"
				></textarea>
			</label>

			<label class="label">
				<!-- Melhorar isso -->
				<span class="label-text">Image Url</span>
				<input class="input" type="text" placeholder="projeto.png" name="imageUrl" />
			</label>
			<label class="label">
				<span class="label-text">Link</span>
				<div class="input-group grid-cols-[auto_1fr_auto]">
					<div class="ig-cell preset-tonal">https://</div>
					<input class="ig-input" type="text" placeholder="thiagomagano.com.br" name="link" />
				</div>
			</label>
			<label class="label">
				<span class="label-text">Github</span>
				<div class="input-group grid-cols-[auto_1fr_auto]">
					<div class="ig-cell preset-tonal">https://github.com/thiagomagano/</div>
					<input class="ig-input" type="text" placeholder="site" name="github" />
				</div>
			</label>
		</fieldset>

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
					<button class="btn btn-sm preset-filled" type="button" onclick={addTech}>Adicionar</button
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
		<fieldset class="flex justify-end">
			<button type="submit" class="btn preset-outlined-surface-300-700" formaction="?/createProject"
				>Enviar</button
			>
		</fieldset>
	</form>

	<!-- CONSIDERAR FAZER UM PREVIEW? -->

	{#if form?.success}
		<p class="p-2 bg-green-200 text-green-800 rounded">
			Projeto criado com sucesso! ID: {form?.response._id}
		</p>
	{/if}
</main>
