import { Provider } from 'react-redux';
import store from '@Redux/store';
import { AppProps } from 'next/app';
import type { NextApiRequest, NextApiResponse } from 'next';
import { ApolloProvider } from '@apollo/client';

export type _ctxApp = {
    pathname: string; //  Current route. That is the path of the page in /pages
    query: any; // Query string section of URL parsed as an object
    asPath: any; // String of the actual path (including the query) shown in the browser
    req: NextApiRequest; // HTTP request object (server only)
    res: NextApiResponse; // HTTP response object (server only)
    err: any; // Error object if any error is encountered during the rendering
};
//load style of ant
import 'antd/dist/antd.css';
import '@Styles/_app.scss';
import { useApollo } from '@Services/apollo-connect';
import { FC } from 'react';

const NextApp: FC<AppProps> = ({ Component, pageProps }) => {
    console.log('==============>', pageProps);
    const apolloClient = useApollo(pageProps.initialApolloState);

    return (
        <ApolloProvider client={apolloClient}>
            <Provider store={store}>
                {/* <LanguageProvider> */}
                <Component {...pageProps} />
                {/* </LanguageProvider> */}
            </Provider>
        </ApolloProvider>
    );
};

export const getInitialProps: any = async ({ Component, ctx: _ctxApp }) => {
    return {
        pageProps: {
            ...(Component.getInitialProps ? await Component.getInitialProps(_ctxApp) : {}),
        },
    };
};
export default NextApp;
