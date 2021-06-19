import getConfig from 'next/config';

import { useMemo } from 'react';
import merge from 'deepmerge';
import cookie from 'cookie';
import type { GetServerSidePropsContext } from 'next';
// import type { IncomingMessage } from 'http';
import type { NormalizedCacheObject } from '@apollo/client';
import { ApolloClient, HttpLink, InMemoryCache } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import { IncomingMessage } from 'node:http';

// interface PageProps {
//     props?: Record<string, any>;
// }

const {
    serverRuntimeConfig: { APOLLO_SERVER_URL },
} = getConfig();

export const APOLLO_STATE_PROPERTY_NAME = 'initialApolloState';
export const COOKIES_TOKEN_NAME = 'jwt';

const getToken = (req?: IncomingMessage) => {
    console.log(req.headers.cookie);
    const parsedCookie = cookie.parse(req ? req.headers.cookie ?? '' : document.cookie);

    return parsedCookie[COOKIES_TOKEN_NAME];
};

let apolloClient: ApolloClient<NormalizedCacheObject> = null;

const createApolloClient = (ctx?: GetServerSidePropsContext) => {
    const httpLink = new HttpLink({
        uri: APOLLO_SERVER_URL,
        credentials: 'same-origin',
    });

    const authLink = setContext((_, { headers }) => {
        // // Get the authentication token from cookies
        // const token = getToken(ctx?.req);

        // return {
        //     headers: {
        //         ...headers,
        //         authorization: token ? `Bearer ${token}` : '',
        //     },
        // };
        return {};
    });

    return new ApolloClient({
        ssrMode: typeof window === 'undefined',
        link: authLink.concat(httpLink),
        cache: new InMemoryCache({
            addTypename: false,
        }),
    });
};

export function initializeApollo(initialState = null): any {
    const client = apolloClient ?? createApolloClient(initialState);

    // If your page has Next.js data fetching methods that use Apollo Client,
    // the initial state gets hydrated here
    if (initialState) {
        // Get existing cache, loaded during client side data fetching
        const existingCache = client.extract();

        // Merge the existing cache into data passed from
        // getStaticProps/getServerSideProps
        const data = merge(initialState, existingCache);

        // Restore the cache with the merged data
        client.cache.restore(data);
    }

    // For SSG and SSR always create a new Apollo Client
    if (typeof window === 'undefined') {
        console.log('=======> init apollo', initialState);
        return client;
    }

    // Create the Apollo Client once in the client
    if (!apolloClient) {
        apolloClient = client;
    }

    return client;
}

// export function addApolloState(client: ApolloClient<NormalizedCacheObject>, pageProps: PageProps): any {
//     if (pageProps?.props) {
//         pageProps.props[APOLLO_STATE_PROPERTY_NAME] = client.cache.extract();
//     }

//     return pageProps;
// }

export function useApollo(initialState: NormalizedCacheObject): any {
    const store = useMemo(() => initializeApollo(initialState), [initialState]);

    return store;
}
