// Import for this provider
import React, { useState, useContext, createContext, Context } from 'react';
import { ApolloProvider, ApolloClient, InMemoryCache, HttpLink } from '@apollo/client';
import getConfig from 'next/config';

const {
    serverRuntimeConfig: { APOLLO_SERVER_URL },
} = getConfig();

// define interface
interface IAuthProvider {
    children: any;
}
interface UseProvideAuth {
    setAuthentication: (token: string) => void;
    isSignedIn: () => boolean;
    createApolloClient: () => any;
}

// define hooks
export const KEY_TOKEN = 'secret';

export const AuthContext: Context<any> = createContext(null);

export function AuthProvider({ children }: IAuthProvider): any {
    const auth = useProvideAuth();

    return (
        <AuthContext.Provider value={auth}>
            <ApolloProvider client={auth.createApolloClient()}>{children}</ApolloProvider>
        </AuthContext.Provider>
    );
}

export const useAuth = () => {
    return useContext(AuthContext);
};

export function useProvideAuth(): UseProvideAuth {
    const [authToken, setAuthToken] = useState<string>(null);

    const isSignedIn = () => {
        if (authToken) {
            return true;
        } else {
            return false;
        }
    };

    const getAuthHeaders = () => {
        if (!authToken) return null;

        return {
            authorization: `Bearer ${authToken}`,
        };
    };

    const createApolloClient = () => {
        const link = new HttpLink({
            uri: `${APOLLO_SERVER_URL}/graphql`,
            headers: getAuthHeaders(),
        });

        return new ApolloClient({
            link,
            cache: new InMemoryCache(),
        });
    };

    const setAuthentication = token => {
        setAuthToken(token);
        localStorage.setItem(KEY_TOKEN, token);
    };

    // const signIn = async ({ credential, password }: LoginInput) => {
    //     const client = createApolloClient();
    //     const LoginMutation = gql`
    //         mutation signin($credential: String!, $password: String!) {
    //             login(credential: $credential, password: $password) {
    //                 token
    //             }
    //         }
    //     `;

    //     const result = await client.mutate({
    //         mutation: LoginMutation,
    //         variables: { credential, password },
    //     });

    //     if (result?.data?.login?.token) {
    //         setAuthToken(result.data.login.token);
    //     }
    // };

    // const signOut = () => {
    //     setAuthToken(null);
    // };

    return {
        isSignedIn,
        setAuthentication,
        createApolloClient,
    };
}
