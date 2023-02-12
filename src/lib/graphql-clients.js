import { browser } from "$app/environment"
import { GraphQLClient } from "graphql-request"

const GRAPHQL_API = browser ? import.meta.env.VITE_GRAPHQL_API : process.env['GRAPHQL_API']

export const client = new GraphQLClient(GRAPHQL_API, { headers: {} })
