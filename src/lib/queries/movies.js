import { gql } from "graphql-request";

export const GET_MOVIE = gql`
    query Movie ($id: ID){
        movie(where: {id: $id}) {
            description
            id
            seen
            slug
            tags
            title
            portal {
                url
            }
            mp4 {
                url
            }
        }
    }
`

export const GET_SEARCH_MOVIES = gql`
    query Searching ($query: String){
        movies(where: { OR: [{ title_contains: $query},{ plataform: { title_contains: $query } }]}){      
            id
            title
            thumbnail {
                url
            }
        }
    }
`

