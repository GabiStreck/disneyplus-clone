import { client } from "$lib/graphql-clients";
import { GET_COLLECTIONS } from "../../lib/queries/collections";

export const load = async () => {
    try {
        const { collections } = await client.request(GET_COLLECTIONS)
        return {
            status: 200,
            data: JSON.stringify(collections),
        }
    } catch (error) {
        return {
            status: 500,
            data: { error: error }
        }
    }
}