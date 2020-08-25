import { ApolloClient } from "apollo-client";
import { InMemoryCache } from "apollo-cache-inmemory";
import withApollo from "next-with-apollo";
import { createHttpLink } from "apollo-link-http";
import fetch from "isomorphic-unfetch";

const GRAPHQL_URL = "https://immense-savannah-01420.herokuapp.com";

const link = createHttpLink({
  fetch,
  uri: GRAPHQL_URL + "/graphql",
});

export default withApollo(
  ({ initialState }) =>
    new ApolloClient({
      link: link,
      cache: new InMemoryCache().restore(initialState || {}),
    })
);
