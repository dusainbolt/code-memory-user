import { Provider } from 'react-redux';
import store from '@Redux/store';
import { AppProps } from 'next/app';
import { ApolloProvider } from '@apollo/client';

import { useApollo } from '@Services/apollo-connect';
import { FC } from 'react';
import dynamic from 'next/dynamic';

// load style local
import '@Styles/_app.scss';

// load style lib
import 'antd/dist/antd.css';
import 'nprogress/nprogress.css';

import { withRouter } from 'next/router';

const TopProgressBar = dynamic(
    () => {
        return import('@Common/TopProgressBar');
    },
    { ssr: false }
);

const CodeMemory: FC<AppProps> = ({ Component, pageProps }) => {
    const apolloClient = useApollo(pageProps.initialApolloState);

    return (
        <ApolloProvider client={apolloClient}>
            <Provider store={store}>
                <TopProgressBar />
                <Component {...pageProps} />
            </Provider>
        </ApolloProvider>
    );
};

export default withRouter(CodeMemory);
