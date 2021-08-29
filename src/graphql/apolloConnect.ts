import getConfig from 'next/config';
import type { GetServerSidePropsContext } from 'next';
import { ApolloClient, HttpLink, InMemoryCache } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import { storeWrapper } from '@Redux/store';
import { RootState } from '@Redux/reducer';

const {
  serverRuntimeConfig: { APOLLO_SERVER_URL },
  publicRuntimeConfig: { CLIENT_APOLLO_SERVER_URL },
} = getConfig();

const createApolloClient = (ctx?: GetServerSidePropsContext) => {
  const apolloURl = typeof window === 'undefined' ? APOLLO_SERVER_URL : CLIENT_APOLLO_SERVER_URL;
  const httpLink = new HttpLink({
    uri: `${apolloURl}/graphql`,
    credentials: 'same-origin',
  });

  const authLink = setContext((_, { headers }) => {
    let token = '';
    if (typeof window !== 'undefined') {
      token = (storeWrapper.getState() as RootState)?.loginSlice.token;
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

export const apolloInstance = new ApolloClient(createApolloClient());

export type ApolloType = typeof apolloInstance;
