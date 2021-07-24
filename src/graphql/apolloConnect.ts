import getConfig from 'next/config';
import merge from 'deepmerge';
import type { GetServerSidePropsContext } from 'next';
import type { NormalizedCacheObject } from '@apollo/client';
import { ApolloClient, HttpLink, InMemoryCache } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import { storeWrapper } from '@Redux/store';

const {
  serverRuntimeConfig: { APOLLO_SERVER_URL },
  publicRuntimeConfig: { CLIENT_APOLLO_SERVER_URL },
} = getConfig();

let apolloClient: ApolloClient<NormalizedCacheObject> = null;

const createApolloClient = (ctx?: GetServerSidePropsContext) => {
  const apolloURl = typeof window === 'undefined' ? APOLLO_SERVER_URL : CLIENT_APOLLO_SERVER_URL;
  const httpLink = new HttpLink({
    uri: `${apolloURl}/graphql`,
    credentials: 'same-origin',
  });

  const authLink = setContext((_, { headers }) => {
    let token = '';
    if (typeof window !== 'undefined') {
      token = storeWrapper.getState().loginReducer.token;
    }

    return {
      headers: {
        ...headers,
        authorization: token ? `Bearer ${token}` : '',
      },
    };
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

// export function useApollo(initialState: NormalizedCacheObject): any {
//     const store = useMemo(() => initializeApollo(initialState), [initialState]);

//     return store;
// }
