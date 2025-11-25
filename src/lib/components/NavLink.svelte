<script lang="ts">
	interface Props {
		href?: string;
		icon?: string;
		label?: string;
		active?: boolean;
		target?: string;
	}

	let {
		href = '/',
		icon = 'mdi:not',
		label = 'Link',
		active = false,
		target = ''
	}: Props = $props();
</script>

<a
	{href}
	class="btn btn-sm border-b-4 hover:border-b-tertiary-500 {active
		? 'border-b-primary-500'
		: 'border-b-transparent'}"
	{target}
	aria-label={label}
>
	<iconify-icon {icon} width="24"></iconify-icon>
	<span>{label}</span>
</a>
