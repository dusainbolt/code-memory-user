import { FC, Fragment } from 'react';
import { SeoHome } from '@Common/Meta';
import HomePageComponent from '@Components/Home';
import Header from '@Common/Header';
import Footer from '@Common/Footer';

import 'swiper/swiper.min.css';
import { GetServerSideProps } from 'next';
import { wrapper } from '@Redux/store';
import { END } from 'redux-saga';
import { getSeoHome } from '@Redux/actionCreators/seoHomeActionCreators';
import { useStore } from 'react-redux';

interface IIndexPage {
    seoHome: SeoHome;
}

const IndexPage: FC<any> = props => {
    const store = useStore();
    console.log(store.getState());
    return (
        <Fragment>
            {/* <Meta seoHome={props.seoHome} /> */}
            <Header />
            <HomePageComponent {...props} />
            <Footer />
        </Fragment>
    );
};

export default IndexPage;

// export const getStaticProps: GetStaticProps = async () => {
//     const { data: seoHome } = await getSeoHome();
//     return {
//         props: { ...seoHome }, // will be passed to the page component as props
//     };
// };

export const getServerSideProps: GetServerSideProps = wrapper.getServerSideProps(store => async () => {
    store.dispatch(getSeoHome());
    store.dispatch(END);
    await store.sagaTask.toPromise();
    return { props: {} };
});
