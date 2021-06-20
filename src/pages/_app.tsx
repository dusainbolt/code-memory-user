import { Provider } from 'react-redux';
import store from '@Redux/store';
import { AppProps } from 'next/app';
import { ApolloProvider } from '@apollo/client';

import { useApollo } from '@Services/apollo-connect';
import { FC } from 'react';
import dynamic from 'next/dynamic';

// load style lib
import 'nprogress/nprogress.css';
import 'antd/dist/antd.css';

// load style local
import '@Styles/_app.scss';

import { withRouter } from 'next/router';
import { AuthProvider } from 'src/Provider/auth';

const TopProgressBar = dynamic(
    () => {
        return import('@Common/TopProgressBar');
    },
    { ssr: false }
);

const CodeMemory: FC<AppProps> = ({ Component, pageProps }) => {
    const apolloClient = useApollo(pageProps.initialApolloState);

    return (
        // <ApolloProvider client={apolloClient}>
        <AuthProvider>
            <Provider store={store}>
                <TopProgressBar />
                <Component {...pageProps} />
            </Provider>
        </AuthProvider>
        // </ApolloProvider>
    );
};

export default withRouter(CodeMemory);
