<script lang="ts">
		const drawerStore = getDrawerStore();

	function drawerClose() {
		drawerStore.close();
	}

	interface NavData {
		slug: string;
		icon: string;
		label: string;
	}

	const navData: NavData[] = [
		{
			slug: '/',
			icon: 'mdi:home-outline',
			label: 'Home'
		},
		{
			slug: '/projects',
			icon: 'mdi:code-tags',
			label: 'Meus Projetos'
		},
		{
			slug: '/about',
			icon: 'mdi:about-outline',
			label: 'Quem eu sou?'
		},
		{
			slug: '/contact',
			icon: 'mdi:message-outline',
			label: 'Fale Comigo'
		}
	];
</script>

<nav class="list-nav p-4">
	<ul class="flex flex-col flex-start">
		{#each navData as { slug, icon, label }}
			<li>
				<a href={slug} class="" onclick={drawerClose}>
					<iconify-icon {icon} width="24"></iconify-icon>
					<span>{label}</span>
				</a>
			</li>
		{/each}
	</ul>
</nav>
