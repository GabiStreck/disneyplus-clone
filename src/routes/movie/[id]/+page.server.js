import { client } from "$lib/graphql-clients";
import { GET_MOVIE } from "../../../lib/queries/movies";

export const load = async ({ params }) => {
    try {
        const { movie } = await client.request(GET_MOVIE, {
            id: params.id
        })
        return {
            status: 200,
            data: JSON.stringify(movie)
        }
    } catch (error) {
        return {
            status: 500,
            data: { error: error }
        }
    }
}