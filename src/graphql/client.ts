import {  ApolloClient, InMemoryCache } from "@apollo/client";

const client = new ApolloClient({
  uri: "https://urchin-app-ikk9z.ondigitalocean.app/graphql",
  cache: new InMemoryCache({
    
  }),
});

export default client;


