<script>
	export let onSubmit = () => {};
	export let placeholder = 'Search by title, plataform, or genre';

	function onKeyUpPress(key, target) {
		if (
			key === 'Enter' ||
			key === ' ' ||
			((key === 'Delete' || key === 'Backspace') && target.value == '')
		) {
			onSubmit(target.value);
		}
	}
</script>

<input
	class="search-input"
	aria-label="search-input"
	{placeholder}
	autocomplete="off"
	on:keyup={({ key, target }) => onKeyUpPress(key, target)}
/>

<style>
	.search-input {
		width: 100%;
		height: 100%;
		background-color: transparent;
		font-size: 2.6em;
		color: white;
		border: none;
	}

	.search-input::placeholder {
		color: white;
	}

	.search-input:focus,
	.search-input:focus {
		outline: none;
	}
</style>
