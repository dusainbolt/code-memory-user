import getConfig from 'next/config';
import { ApolloClient, InMemoryCache } from '@apollo/client';

const {
    serverRuntimeConfig: { APOLLO_SERVER_URL },
} = getConfig();

const client = new ApolloClient({
    uri: APOLLO_SERVER_URL,
    cache: new InMemoryCache(),
});

export default client;
