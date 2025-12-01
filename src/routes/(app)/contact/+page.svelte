<script lang="ts">
	import Headline from '$lib/components/Headline.svelte';

	const SOCIAL_ICON_SIZE = '42';
	const PHONE = '+5551993438767';
	const BODYMSG = 'Olá Thiago, Estava olhando seu site e gostaria de falar com você!';
</script>

<section class="body-font relative">
	<div class="container py-24 mx-auto max-w-(--breakpoint-lg)">
		<Headline
			headline="Contato"
			description="Opa, que bom que tu quer falar comigo. Tu podes me encontrar pelas
				redes sociais abaixo."
		/>

		<ul class="grid w-full grid-cols-2 gap-8 py-4 md:pt-9">
			<li class="flex gap-2 items-center">
				<iconify-icon icon="mdi:whatsapp" width={SOCIAL_ICON_SIZE}></iconify-icon>
				<a
					class="hover:underline"
					href="https://api.whatsapp.com/send?phone={PHONE}&text={BODYMSG}"
				>
					Whatsapp
				</a>
			</li>
			<li class="flex gap-2 items-center">
				<iconify-icon icon="mdi:linkedin" width={SOCIAL_ICON_SIZE}></iconify-icon>
				<a class="hover:underline" href="http://linkedin.com/in/thiagomagano"> Linkedin </a>
			</li>
			<li class="flex gap-2 items-center">
				<iconify-icon icon="mdi:github" width={SOCIAL_ICON_SIZE}></iconify-icon>
				<a class="hover:underline" href="http://github.com/thiagomagano"> Github </a>
			</li>
			<li class="flex gap-2 items-center">
				<iconify-icon icon="mdi:instagram" width={SOCIAL_ICON_SIZE}></iconify-icon>
				<a class="hover:underline" href="http://instagram.com/thimagano"> Instagram</a>
			</li>
		</ul>
	</div>
</section>
