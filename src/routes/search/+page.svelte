<script>
	import { onMount } from 'svelte';

	import { client } from '$lib/graphql-clients';
	import { GET_SEARCH_MOVIES } from '$lib/queries/movies';
	import { GET_BY_COLLECTION } from '$lib/queries/collections';

	import Header from '$lib/components/Header.svelte';
	import SearchForm from '$lib/components/SearchForm.svelte';
	import MovieCard from '$lib/components/MovieCard.svelte';

	export let data;
	let collectionsData = [];
	let searchData = [];

	onMount(() => {
		if (data.data) {
			collectionsData = JSON.parse(data.data);
		}
	});

	async function onSearching(query) {
		try {
			query = query.trim();
			if (!query) return (searchData = []);
			const { movies } = await client.request(GET_SEARCH_MOVIES, {
				query: query
			});

			if (movies?.length > 0) {
				searchData = movies;
				return searchData;
			}
			searchData = `There is no content related to ${query}, try searching with other words or filter by collection.`;
		} catch (error) {
			console.error(error);
		}
	}

	async function onSearchingCollection(id) {
		try {
			const { collection } = await client.request(GET_BY_COLLECTION, {
				id: id
			});
			searchData = collection.movies;
		} catch (error) {
			console.error(error);
		}
	}
</script>

<Header />
<main class="main-container">
	<div class="search-container">
		<SearchForm onSubmit={onSearching} />
	</div>
	<section class="container-results">
		<h2>Explore</h2>
		{#if typeof searchData === 'string'}
			<p class="empty-msg">{searchData}</p>
		{/if}
		<div class="content-results" role="grid">
			{#if typeof searchData !== 'string' && searchData.length > 0}
				{#each searchData as { thumbnail, id, title }}
					<MovieCard image={thumbnail?.url} movieId={id} />
				{/each}
			{:else}
				{#each collectionsData as { thumbnail, id }}
					<MovieCard image={thumbnail?.url} movieId={id} onClick={onSearchingCollection} />
				{/each}
			{/if}
		</div>
	</section>
</main>

<style>
	.main-container {
		display: flex;
		flex-direction: column;
	}

	.search-container {
		background-color: transparent;
		margin-top: 80px;
		height: 80px;
		padding: 0 30px;
		background: linear-gradient(rgba(187, 187, 187, 0.3), rgba(187, 187, 187, 0.7));
		max-height: 6.5rem;
	}

	.container-results {
		display: flex;
		flex-direction: column;
		gap: 20px;
		margin-top: 20px;
		padding: 20px;
	}

	.content-results {
		margin: auto;
		padding: 15px 0;
		max-width: 100vw;
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(16.75rem, max-content));
		gap: 15px;
	}

	.empty-msg {
		text-align: center;
		font-size: 1.65em;
	}
</style>
