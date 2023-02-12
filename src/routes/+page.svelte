<script>
	import { onMount } from 'svelte';
	import Header from '$lib/components/Header.svelte';
	import MoviesList from '$lib/components/MoviesList.svelte';

	export let data;
	let plataforms = [];
	let allMovies = [];
	let imageBackground = '';
	onMount(() => {
		if (data.status == 200) {
			plataforms = JSON.parse(data.data);
			plataforms.forEach(({ movies }) => {
				allMovies.push(movies);
			});
			allMovies = allMovies.flat();
			imageBackground = allMovies[0].portal.url;
		}
	});

	function randomImage() {
		return allMovies[Math.floor(Math.random() * allMovies.length)]?.portal?.url;
	}

	$: setInterval(() => {
		imageBackground = randomImage();
		return clearInterval();
	}, 30000);
</script>

{#if plataforms}
	<Header />
	<main class="main-container">
		<div>
			<img src={imageBackground} alt="" class="image-background" />
		</div>
		<section class="section-plataform">
			{#each plataforms as { title, movies }}
				<MoviesList {movies} plataformTitle={title} />
			{/each}
		</section>
	</main>
{/if}

<style>
	.main-container {
		display: grid;
		width: 100%;
	}

	.image-background {
		width: 100%;
		object-fit: cover;
		max-height: 40vh;
		transition: transform 0.5s, filter 0.5s ease-in-out;
		transform-origin: center center;
		filter: brightness(70%);
	}
</style>
