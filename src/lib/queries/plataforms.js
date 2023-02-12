import { gql } from "graphql-request";

export const GET_PLATAFORMS_WITH_MOVIES = gql`query Plataforms {
  plataforms {
    title
    movies {
      title
      id
      thumbnail {
        url
      }
      portal {
        url
      }
      company{
        title
      }
    }
  }
}`