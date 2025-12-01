<script>
	import { enhance } from '$app/forms';
	export let form;

	let loading = false;
</script>

<section>
	<div class="container py-16 mx-auto max-w-(--breakpoint-lg)">
		<form
			class="w-full space-y-4 p-4 place-self-center max-w-md"
			action="login"
			method="POST"
			use:enhance={() => {
				loading = true;
				return async ({ update }) => {
					await update();
					loading = false;
				};
			}}
		>
			<fieldset>
				<h2 class="h2 text-center uppercase">Login</h2>
			</fieldset>

			{#if form?.error}
				<div class="error text-error-500">{form?.error}</div>
			{/if}
			<fieldset class="space-y-4">
				<label class="label">
					<span class="label-text">Email</span>
					<input
						class="input"
						type="email"
						placeholder="Email"
						name="email"
						id="email"
						required
						autocomplete="email"
						value={form?.email ?? ''}
					/>
				</label>
			</fieldset>
			<fieldset class="space-y-4">
				<label class="label">
					<span class="label-text">Senha</span>
					<input
						class="input"
						type="password"
						placeholder="Senha"
						id="password"
						name="password"
						required
						autocomplete="current-password"
					/>
				</label>
			</fieldset>
			<fieldset class="flex justify-end">
				<button type="submit" class="btn preset-filled-primary-500" disabled={loading}
					>Entrar</button
				>
			</fieldset>
		</form>
	</div>
</section>
