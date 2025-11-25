<script lang="ts">
	import '../app.postcss';

	import {
		AppShell,
		AppBar,
		Toast,
		LightSwitch,
		initializeStores,
		Drawer,
		getDrawerStore
	} from '@skeletonlabs/skeleton';

	initializeStores();
	const drawerStore = getDrawerStore();

	import { fly } from 'svelte/transition';

	import NavLink from '$lib/components/NavLink.svelte';
	import Navigation from '$lib/components/Navigation.svelte';
	import SocialLinks from '$lib/components/SocialLinks.svelte';

	export let data;

	function drawerOpen(): void {
		drawerStore.open({});
	}

	const dataAtual = new Date();
	const anoAtual = dataAtual.getFullYear();
</script>

<Toast position="t" />
<Drawer bgDrawer="variant-glass">
	<h2 class="py-4 pl-8">Thiago Magano</h2>
	<hr />
	<Navigation />
	<SocialLinks iconSize="28" classes="flex p-4 pl-8 align-center gap-2 " />
</Drawer>

<AppShell slotSidebarLeft="w-56 p-4" slotPageContent="px-4 md:px-0">
	<svelte:fragment slot="header">
		<!-- App Bar -->
		<AppBar
			background="transparent"
			gridColumns="grid-cols-3"
			slotLead="lg:place-self-start place-self-center lg:order-1 order-2"
			slotDefault="lg:place-self-center place-self-start order-1 lg:order-2"
			slotTrail="place-content-end order-3"
		>
			<svelte:fragment slot="lead">
				<a
					href="/"
					class="btn btn-sm border-b-4 hover:border-b-surface-500 hover:text-opacity-75 font-mono {data.url ===
					'/'
						? 'border-b-primary-500'
						: 'border-b-transparent'}"
				>
					<span class="font-bold tracking-wide">thiagomagano.com.br</span>
				</a>
			</svelte:fragment>
			<svelte:fragment slot="default">
				<nav class="lg:flex hidden flex-nowrap gap-2">
					<NavLink
						href="/about"
						icon="mdi:toolbox-outline"
						label="Carreira"
						active={data.url === '/about'}
					/>
					<NavLink
						href="/projects"
						icon="mdi:code-tags"
						label="Projetos"
						active={data.url === '/projects'}
					/>

					<NavLink
						href="/contact"
						icon="mdi:message-outline"
						label="Contato"
						active={data.url === '/contact'}
					/>
					<NavLink
						href="/documents/cv.pdf"
						icon="mdi:download-outline"
						label="Currículo"
						target="_blank"
					/>
				</nav>

				<button class="lg:hidden btn btn-sm" on:click={drawerOpen}>
					<span>
						<svg viewBox="0 0 100 80" class="fill-token w-4 h-4">
							<rect width="100" height="20" />
							<rect y="30" width="100" height="20" />
							<rect y="60" width="100" height="20" />
						</svg>
					</span>
				</button>
			</svelte:fragment>

			<svelte:fragment slot="trail"><LightSwitch /></svelte:fragment>
		</AppBar>
	</svelte:fragment>
	{#key data.url}
		<div
			in:fly|global={{ x: -200, duration: 300, delay: 300 }}
			out:fly|global={{ x: 200, duration: 300 }}
		>
			<slot />
		</div>
	{/key}
	<svelte:fragment slot="pageFooter">
		<div class=" bg-opacity-75 text-center">
			<div
				class="container mx-auto py-4 px-5 flex flex-wrap flex-col sm:flex-row justify-center items-center gap-4"
			>
				<p class="text-gray-400 text-sm text-center sm:text-left">© {anoAtual} Thiago Magano</p>

				<SocialLinks iconSize="28" classes="mt-2" />
			</div>
		</div>
	</svelte:fragment>
</AppShell>
