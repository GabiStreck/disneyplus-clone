<script>
	import MovieCard from './MovieCard.svelte';

	export let movies = [];
	export let plataformTitle = '';
</script>

<div class="section-plataform">
	<h4>{plataformTitle}</h4>
	<div class="movies-container">
		{#each movies as { thumbnail, title, id }}
			<MovieCard image={thumbnail?.url} alt={title} movieId={id} />
		{/each}
	</div>
</div>

<style>
	.section-plataform {
		display: flex;
		flex-direction: column;
		max-width: calc(100vw - 30px);
		padding: 10px;
	}

	.movies-container {
		display: flex;
		gap: 20px;
		padding: 15px 10px;
		overflow-y: hidden;
		overflow-x: scroll;
		padding-bottom: 38px;
	}

	.movies-container {
		-ms-overflow-style: none;
	}

	.movies-container::-webkit-scrollbar {
		display: none;
	}
</style>
