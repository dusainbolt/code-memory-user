import { Provider } from 'react-redux';
import store from '@Redux/store';
import { AppProps } from 'next/app';
import { _ctxApp } from '@Config/models';
import { LanguageProvider } from '@Components/LanguageProvider';

//load style of ant
import 'antd/dist/antd.css';
//generator common css Overload to best performance
// import '@Public/styles/watch/layout.css';
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
