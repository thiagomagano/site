<script>
	let { data } = $props();
	const { projects } = data;
</script>

<h1>PROJETOS</h1>
<ol class="ol">
	{#each projects as project}
		<li id={project.id}>{project.title}</li>
	{/each}
</ol>
