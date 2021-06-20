import { FC, Fragment } from 'react';
import HomePageComponent from '@Components/Home';
import Header from '@Common/Header';
import Footer from '@Common/Footer';
import Meta, { SeoHome } from '@Common/Meta';
import { GetStaticProps } from 'next';
import { useAppSelector, wrapper } from '@Redux/store';
import { END } from 'redux-saga';
import { getSeoHome } from '@Redux/actionCreators/seoHomeActionCreators';

import 'swiper/swiper.min.css';

// interface IIndexPage {
//     seoHome: SeoHome;
// }

const IndexPage: FC<any> = props => {
    const seoHome = useAppSelector(store => store.seoHomeReducer);
    return (
        <Fragment>
            <Meta seoHome={seoHome} />
            <Header />
            <HomePageComponent {...props} />
            <Footer />
        </Fragment>
    );
};

export default IndexPage;

export const getStaticProps: GetStaticProps = wrapper.getStaticProps(store => async () => {
    store.dispatch(getSeoHome());
    store.dispatch(END);
    await store.sagaTask.toPromise();
    return { props: {} };
});
