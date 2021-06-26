import { Fragment } from 'react';
import Meta from '@Common/Meta';
import Header from '@Common/Header';
import Footer from '@Common/Footer';
import { GetStaticProps } from 'next';
import { useAppSelector, wrapper } from '@Redux/store';
import { getSeoHome } from '@Redux/actionCreators/seoHomeActionCreators';
import { END } from 'redux-saga';
import { SeoHome } from 'src/models/seo-home';

export interface IBlogPage {
    seoHome: SeoHome;
}

const BlogPage: React.FC<IBlogPage> = props => {
    const seoHome = useAppSelector(store => store.seoHomeReducer);

    return (
        <Fragment>
            <Meta seoHome={seoHome} />
            <Header />
            <Footer />
        </Fragment>
    );
};

export default BlogPage;

export const getStaticProps: GetStaticProps = wrapper.getStaticProps(store => async () => {
    store.dispatch(getSeoHome());
    store.dispatch(END);
    await store.sagaTask.toPromise();
    return { props: {} };
});
