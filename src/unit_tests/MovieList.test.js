import { afterEach, describe, expect, it } from 'vitest';
import { cleanup, render } from '@testing-library/svelte';
import MoviesList from '../lib/components/MoviesList.svelte';

describe("Unit test to MoviesList", () => {
    afterEach(cleanup)

    it('try rendering without props', () => {
        render(MoviesList, {});
        cleanup()
    });

    it('render component without of movies', () => {
        const props = {
            movies: [],
            plataformTitle: "title_plataform"
        }
        render(MoviesList, props);
    });

    it('render component with of movies', async () => {
        const props = {
            movies: [{
                image: "https://picsum.photos/200",
                alt: "title_video",
                movieId: "1354321"
            },
            {
                image: "https://picsum.photos/200",
                alt: "title_video_2",
                movieId: "1354321_2"
            }],
            plataformTitle: "title_plataform"
        }
        const { findAllByRole, getByRole } = render(MoviesList, props);
        const h2 = getByRole('heading', { leavel: 2 })
        const items = await findAllByRole('article')
        expect(h2.innerHTML).toContain(props.plataformTitle)
        expect(items).toHaveLength(2)

    });

    cleanup()
})

