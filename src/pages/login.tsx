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

interface IIndexPage {
    seoHome: SeoHome;
}

const IndexPage: FC<IIndexPage> = props => {
    const { t } = useTranslation();
    const seoHome = useAppSelector(store => store.seoHomeReducer);
    const { messageCrash } = useAppSelector(store => store.isLoadingReducer);

    return !messageCrash && <Fragment>
        <Meta title={t('login.title_meta')} seoHome={seoHome} />
        <Header />
        <LoginComponent />
        <Footer />
    </Fragment>;
};

export default IndexPage;

export const getStaticProps: GetStaticProps = wrapper.getStaticProps(store => async () => {
    store.dispatch(getSeoHome());
    store.dispatch(END);
    await store.sagaTask.toPromise();
    return { props: {} };
});
