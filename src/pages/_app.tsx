import '@Styles/_app.scss';
import { Provider } from 'react-redux';
import store from '@Redux/store';
import { AppProps } from 'next/app';
import { _ctxApp } from '@Config/models';
import { useRouter } from 'next/router';
import { getLocale } from '@Config/locale';

//generator common css Overload to best performance
import "@Public/styles/watch/layout.css";
function NextApp({ Component, pageProps }: AppProps) {
  const router = useRouter();
  const { locale } = router;
  const t = getLocale(locale);
    return (
        <Provider store={store}>
            <Component {...pageProps} t={t} locale={locale} />
            
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
