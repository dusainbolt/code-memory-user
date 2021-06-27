import { Fragment } from 'react';
import Meta from '@Common/Meta';
import Header from '@Common/Header';
import Footer from '@Common/Footer';
import { GetStaticProps } from 'next';
import { useAppSelector, wrapper } from '@Redux/store';
import { getSeoHome } from '@Redux/actionCreators/seoHomeActionCreators';
import { END } from 'redux-saga';
import { SeoHome } from 'src/models/seo-home';

export interface IAboutPage {
    seoHome: SeoHome;
}

const AboutPage: React.FC<IAboutPage> = props => {
    const seoHome = useAppSelector(store => store.seoHomeReducer);

    return (
        <Fragment>
            <Meta seoHome={seoHome} />
            <Header />
            <Footer seoHome={seoHome} />
        </Fragment>
    );
};

export default AboutPage;

export const getStaticProps: GetStaticProps = wrapper.getStaticProps(store => async () => {
    store.dispatch(getSeoHome());
    store.dispatch(END);
    await store.sagaTask.toPromise();
    return { props: {} };
});
