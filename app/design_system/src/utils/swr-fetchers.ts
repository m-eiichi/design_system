import { request } from "graphql-request";

// スターウォーズ(テストケース)
export const fetcher = <T,>(query: string): Promise<T> =>  (request("https://swapi-graphql.netlify.app/.netlify/functions/index", query));