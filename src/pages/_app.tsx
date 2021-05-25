import { Provider } from 'react-redux';
import store from '@Redux/store';
import { AppProps } from 'next/app';
import { LanguageProvider } from '@Components/LanguageProvider';
import type { NextApiRequest, NextApiResponse } from 'next';

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
function NextApp({ Component, pageProps }: AppProps) {
    
    return (
        <Provider store={store}>
            <LanguageProvider>
                    <Component {...pageProps} />
            </LanguageProvider>
        </Provider>
    );
}

NextApp.getInitialProps = async ({ Component, ctx: _ctxApp }) => {
    return {
        pageProps: {
            ...(Component.getInitialProps ? await Component.getInitialProps(_ctxApp) : {}),
        },
    };
};
export default NextApp;
