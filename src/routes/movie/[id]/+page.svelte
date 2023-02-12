<script>
	import { onMount } from 'svelte';
	import { goto } from '$app/navigation';
	export let data;
	let movie = null;
	let waching = false;

	onMount(() => {
		if (data.status == 200) {
			movie = JSON.parse(data.data);
		}
	});

	function onWaching() {
		waching = !waching;
	}
</script>

{#if movie}
	<main>
		{#if !waching}
			<div class="info-container">
				<img src={movie.portal.url} alt={movie.title} class="movie-image" />
				<div class="info-movie">
					<h1>{movie.title}</h1>
					<div>{movie.description}</div>
					<div>{movie.tags.map((item) => item)}</div>
					<div>
						<button class="button-info" on:click={() => goto('/')}> GO TO BACK </button>
						<button class="button-info" on:click={() => onWaching()}>PLAY</button>
					</div>
				</div>
			</div>
		{:else}
			<div class="movie-container">
				<button class="button-back" on:click={() => onWaching()}>
					<img src="/assets/arrow_back.svg" alt="arrow back" class="arrow-back" />
				</button>
				<video controls width="100%" autoplay>
					<source src={movie.mp4.url} type="video/mp4" />
				</video>
			</div>
		{/if}
	</main>
{/if}

<style>
	.info-container {
		position: relative;
		width: 100%;
	}

	.movie-image {
		width: 100%;
		height: 100vh;
		object-fit: cover;
		filter: brightness(80%);
	}

	.info-movie {
		padding: 20px;
		position: absolute;
		bottom: 20%;
		max-width: 600px;
		display: grid;
		gap: 10px;
	}

	.movie-container {
		position: relative;
		width: 100%;
		height: 100vh;
		background-color: black;
		display: flex;
		align-items: center;
		justify-content: center;
	}

	.button-info {
		background-color: rgba(255, 255, 255, 0.5);
		padding: 5px 10px;
		border: none;
		cursor: pointer;
		font-size: 15px;
		font-weight: 600;
		color: white;
		border-radius: 5px;
	}

	.button-info:hover {
		background-color: rgba(255, 255, 255, 1);
		color: gray;
	}

	.button-back {
		position: absolute;
		z-index: 100;
		border-radius: 30px;
		background-color: rgba(255, 255, 255, 0.2);
		border: none;
		padding: 10px;
		top: 20px;
		left: 20px;
		cursor: pointer;
	}

	.arrow-back {
		width: 30px;
		filter: invert(100%) saturate(0%) hue-rotate(87deg) brightness(119%) contrast(119%);
	}
</style>
