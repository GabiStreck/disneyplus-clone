<header class="header-container">
	<img src="/assets/disney-logo.svg" alt="logo" class="logo-header" />
	<nav class="nav-container">
		<a href="/">
			<img src="/assets/home.svg" alt="logo" class="logo-header" /> HOME
		</a>
		<a href="/search">
			<img src="/assets/search.svg" alt="logo" class="logo-header" /> SEARCH
		</a>
	</nav>
</header>

<style>
	.header-container {
		width: 100%;
		padding: 10px;
		position: fixed;
		z-index: 100;
		display: flex;
		gap: 50px;
		align-items: center;
		background: linear-gradient(180deg, rgba(3, 15, 29, 1) 20%, rgba(0, 0, 0, 0) 100%);
	}

	.logo-header {
		max-width: 80px;
	}

	.nav-container {
		display: flex;
		gap: 25px;
		align-items: center;
	}

	.nav-container a {
		display: flex;
		align-items: center;
		gap: 6px;
		text-decoration: none;
		color: white;
	}

	.nav-container img {
		width: 25px;
		filter: invert(100%) saturate(0%) hue-rotate(87deg) brightness(119%) contrast(119%);
	}
</style>
