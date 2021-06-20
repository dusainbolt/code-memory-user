import React, { useState, useContext, createContext, Context } from 'react';
import { ApolloProvider, ApolloClient, InMemoryCache, HttpLink, gql } from '@apollo/client';
import { LoginInput } from '@Components/Login/LoginForm';

interface IAuthProvider {
    children: any;
}

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

function useProvideAuth() {
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
            uri: 'http://localhost:4001/graphql',
            headers: getAuthHeaders(),
        });

        return new ApolloClient({
            link,
            cache: new InMemoryCache(),
        });
    };

    const signIn = async ({ credential, password }: LoginInput) => {
        const client = createApolloClient();
        const LoginMutation = gql`
            mutation signin($credential: String!, $password: String!) {
                login(credential: $credential, password: $password) {
                    token
                }
            }
        `;

        const result = await client.mutate({
            mutation: LoginMutation,
            variables: { credential, password },
        });

        if (result?.data?.login?.token) {
            setAuthToken(result.data.login.token);
        }
    };

    const signOut = () => {
        setAuthToken(null);
    };

    return {
        setAuthToken,
        isSignedIn,
        signIn,
        signOut,
        createApolloClient,
    };
}
