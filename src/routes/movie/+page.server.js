import { client } from "$lib/graphql-clients";
import { GET_MOVIES } from "../../lib/queries/movies";

export const load = async () => {
    try {
        const { videos } = await client.request(GET_MOVIES)

        return {
            status: 200,
            data: JSON.stringify(videos)
        }
    } catch (error) {
        return {
            status: 500,
            data: { error: error }
        }
    }
}