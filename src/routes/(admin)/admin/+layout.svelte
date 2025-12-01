<script>
	import { enhance } from '$app/forms';
	import { page } from '$app/stores';

	let { children } = $props();
</script>

<div class="admin-container">
	<aside class="sidebar">
		<div class="sidebar-header">
			<h2>Admin Panel</h2>
			<p class="user-info"></p>
		</div>

		<nav>
			<a href="/admin" class:active={$page.url.pathname === '/admin'}> 📊 Dashboard </a>
			<a href="/admin/projects" class:active={$page.url.pathname.startsWith('/admin/projects')}>
				💼 Projetos
			</a>
		</nav>

		<div class="sidebar-footer">
			<form method="POST" action="/logout" use:enhance>
				<button type="submit" class="logout-btn"> 🚪 Sair </button>
			</form>
		</div>
	</aside>

	<main class="main-content">
		{@render children()}
	</main>
</div>

<style>
	.admin-container {
		display: flex;
		min-height: 100vh;
	}

	.sidebar {
		width: 260px;
		background: #2d3748;
		color: white;
		display: flex;
		flex-direction: column;
		position: fixed;
		height: 100vh;
		overflow-y: auto;
	}

	.sidebar-header {
		padding: 24px 20px;
		border-bottom: 1px solid rgba(255, 255, 255, 0.1);
	}

	.sidebar-header h2 {
		margin: 0 0 8px 0;
		font-size: 20px;
	}

	.user-info {
		margin: 0;
		font-size: 13px;
		color: #a0aec0;
	}

	nav {
		flex: 1;
		padding: 20px 0;
	}

	nav a {
		display: block;
		padding: 12px 20px;
		color: #cbd5e0;
		text-decoration: none;
		transition: all 0.2s;
		border-left: 3px solid transparent;
	}

	nav a:hover {
		background: rgba(255, 255, 255, 0.05);
		color: white;
	}

	nav a.active {
		background: rgba(255, 255, 255, 0.1);
		color: white;
		border-left-color: #667eea;
	}

	.sidebar-footer {
		padding: 20px;
		border-top: 1px solid rgba(255, 255, 255, 0.1);
	}

	.logout-btn {
		width: 100%;
		padding: 10px;
		background: rgba(255, 255, 255, 0.1);
		color: white;
		border: none;
		border-radius: 6px;
		cursor: pointer;
		transition: background 0.2s;
	}

	.logout-btn:hover {
		background: rgba(255, 255, 255, 0.15);
	}

	.main-content {
		flex: 1;
		margin-left: 260px;
		padding: 30px;
	}

	@media (max-width: 768px) {
		.sidebar {
			width: 100%;
			position: static;
			height: auto;
		}

		.main-content {
			margin-left: 0;
		}
	}
</style>
