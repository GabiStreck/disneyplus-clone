import { afterEach, describe, expect, it } from 'vitest';
import { cleanup, fireEvent, render, screen } from '@testing-library/svelte';
import MovieCard from '../lib/components/MovieCard.svelte';


describe("Unit test to MovieCard", () => {
	afterEach(() => {
		cleanup()
	})
	const props = {
		image: "https://picsum.photos/200",
		alt: "title_video",
		movieId: "1354321"
	}

	it('should render', () => {
		render(MovieCard, props);
	});

	it('uses correct props', () => {
		const { getByAltText } = render(MovieCard, props);
		const image = getByAltText('title_video')
		expect(image.src).toContain('https://picsum.photos/200')
		expect(image.alt).toContain('title_video')
	});

	cleanup()
})

