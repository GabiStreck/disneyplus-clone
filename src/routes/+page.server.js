import { client } from "$lib/graphql-clients";
import { GET_PLATAFORMS_WITH_MOVIES } from "../lib/queries/plataforms";

export const load = async () => {
    try {
        const { plataforms } = await client.request(GET_PLATAFORMS_WITH_MOVIES)
        return {
            status: 200,
            data: JSON.stringify(plataforms)
        }
    } catch (error) {
        return {
            status: 500,
            data: { error: error }
        }
    }
}