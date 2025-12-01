<script>
	import Headline from '$lib/components/Headline.svelte';
</script>

<section>
	<div class="container py-16 mx-auto max-w-(--breakpoint-lg)">
		<form class="w-full space-y-4 p-4 place-self-center max-w-md">
			<fieldset>
				<h2 class="h2 text-center">Login</h2>
			</fieldset>

			<fieldset class="space-y-4">
				<label class="label">
					<span class="label-text">Email</span>
					<input class="input" type="email" placeholder="Email" />
				</label>
			</fieldset>
			<fieldset class="space-y-4">
				<label class="label">
					<span class="label-text">Senha</span>
					<input class="input" type="password" placeholder="Senha" />
				</label>
			</fieldset>
			<fieldset class="flex justify-end">
				<button type="button" class="btn preset-filled-primary-500">Submit</button>
			</fieldset>
		</form>
	</div>
</section>
