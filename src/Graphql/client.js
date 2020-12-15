import { ApolloClient, InMemoryCache } from "@apollo/client/core";

const URL = "https://countries-274616.ew.r.appspot.com/";

export const client = new ApolloClient({
    cache: new InMemoryCache(),
    uri: URL,
});
