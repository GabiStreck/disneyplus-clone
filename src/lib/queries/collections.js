import { gql } from "graphql-request";

export const GET_COLLECTIONS = gql`query Collections {
  collections {
    id    
    thumbnail {
      url
    }
  }
}`

export const GET_BY_COLLECTION = gql`query Collections ($id: ID!){
  collection(where: {id: $id}) {
    movies{
      id    
      thumbnail {
        url
      }
    }
  }
}`


