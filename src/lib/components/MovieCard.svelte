<script>
	import { goto } from '$app/navigation';

	export let image = '';
	export let alt = '';
	export let movieId;
	export let onClick = (movieId) => {
		movieId && goto(`/movie/${movieId}`);
	};
</script>

<div
	class="movie-container"
	role="article"
	on:click={() => onClick(movieId)}
	on:keydown
	on:keyup
	on:keypress
>
	<img src={image} {alt} class="image-movie" />
</div>

<style>
	.movie-container {
		width: 16.75rem;
		height: 10.5rem;
		overflow: hidden;
		border-radius: 10px;
		cursor: pointer;
		flex-shrink: 0;
		box-shadow: 3px 14px 25px 2px rgba(0, 0, 0, 0.8);
	}

	.image-movie {
		width: 100%;
		object-fit: cover;
		height: 100%;
	}

	.image-movie:hover {
		transition: transform 0.5s, filter 0.5s ease-in-out;
		transform-origin: center center;
		filter: brightness(50%);
		transform: scale(1.1);
	}
</style>
