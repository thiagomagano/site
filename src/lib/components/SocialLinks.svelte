<script lang="ts">
	interface Props {
		iconSize?: string;
		classes?: string;
	}

	let { iconSize = '18', classes = '' }: Props = $props();
</script>

<div class={classes}>
	<a
		href="https://linkedin.com/in/thiagomagano"
		target="_blank"
		rel="noreferrer"
		aria-label="linkedin"
	>
		<iconify-icon icon="mdi:linkedin" width={iconSize}></iconify-icon>
	</a>
	<a href="https://github.com/thiagomagano" target="_blank" rel="noreferrer" aria-label="github">
		<iconify-icon icon="mdi:github" width={iconSize}></iconify-icon>
	</a>

	<a href="http://instagram.com/thimagano" aria-label="instagram">
		<iconify-icon icon="mdi:instagram" width={iconSize}></iconify-icon>
	</a>
	<a
		class="hover:underline"
		href="https://api.whatsapp.com/send?phone=+5551993438767&text=Olá Thiago, Gostaria de falar com você"
		aria-label="whatsapp"
	>
		<iconify-icon icon="mdi:whatsapp" width={iconSize}></iconify-icon>
	</a>
	<a href="mail:thiagomagano1993@outlok.com" target="_blank" rel="noreferrer" aria-label="email">
		<iconify-icon icon="mdi:email" width={iconSize}></iconify-icon>
	</a>
</div>
