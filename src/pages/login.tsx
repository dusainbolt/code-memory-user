import { FC, Fragment } from 'react';
import Meta from '@Common/Meta';
import Header from '@Common/Header';
import Footer from '@Common/Footer';

import 'swiper/swiper.min.css';
import { GetStaticProps } from 'next';
import useTranslation from '@Common/LanguageProvider/useTranslation';
import { LoginComponent } from '@Components/Login';
import { useAppSelector, wrapper } from '@Redux/store';
import { getSeoHome } from '@Redux/actionCreators/seoHomeActionCreators';
import { END } from 'redux-saga';
import { SeoHome } from 'src/models/seo-home';

interface ILoginPage {
    seoHome: SeoHome;
}

import { useRouter } from 'next/router';
import { useEffect } from 'react';

const LoginPage: FC<ILoginPage> = props => {
    const { t } = useTranslation();
    const seoHome = useAppSelector(store => store.seoHomeReducer);
    const { messageCrash } = useAppSelector(store => store.isLoadingReducer);

    const { token } = useAppSelector(store => store.loginReducer);
    const router = useRouter();

    useEffect(() => {
        if (token) {
            router.push('/blog');
        }
    }, [token]);


    return !messageCrash && <Fragment>
        <Meta title={t('login.title_meta')} seoHome={seoHome} />
        <Header />
        <LoginComponent />
        <Footer />
    </Fragment>;
};

export default LoginPage;

export const getStaticProps: GetStaticProps = wrapper.getStaticProps(store => async () => {
    store.dispatch(getSeoHome());
    store.dispatch(END);
    await store.sagaTask.toPromise();
    return { props: {} };
});
