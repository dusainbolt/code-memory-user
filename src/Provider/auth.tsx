// Import for this provider
import React, { useState, useContext, createContext, Context, useEffect } from 'react';
import { ApolloProvider, ApolloClient, InMemoryCache, HttpLink } from '@apollo/client';
import getConfig from 'next/config';

const {
    serverRuntimeConfig: { APOLLO_SERVER_URL },
} = getConfig();

// define interface
interface IAuthProvider {
    children: any;
}
export interface UseProvideAuth {
    setAuthentication: (token: string) => void;
    isSignedIn: () => boolean;
    createApolloClient: () => any;
}

// define hooks
export const KEY_TOKEN = 'secret';

export const AuthContext: Context<any> = createContext(null);

export function AuthProvider({ children }: IAuthProvider): any {
    const auth: UseProvideAuth = useProvideAuth();

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
    // const [user, setUser] = useState<any>(null);
    const isSignedIn = () => {
        if (authToken) {
            return true;
        } else {
            return false;
        }
    };

    useEffect(() => {
        if (typeof window !== undefined) {
            const token = localStorage.getItem(KEY_TOKEN);
            setAuthToken(token);
        }
    }, []);

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

    return {
        isSignedIn,
        setAuthentication,
        createApolloClient,
    };
}
