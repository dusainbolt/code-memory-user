import { FC, Fragment } from 'react';
import Meta, { SeoHome } from '@Components/Meta';
import HomePageComponent from '@Components/Pages/Home';
import Header from '@Components/Header';
import Footer from '@Components/Footer';
import 'swiper/swiper.min.css';
import { getSeoHome } from '@Services/seo-home-request';
import { GetStaticProps } from 'next';

interface IIndexPage {
    seoHome: SeoHome;
}

const IndexPage: FC<IIndexPage> = props => {
    return (
        <Fragment>
            <Meta seoHome={props.seoHome} />
            <Header />
            <HomePageComponent {...props} />
            <Footer />
        </Fragment>
    );
};

export default IndexPage;

export const getStaticProps: GetStaticProps = async () => {
    const { data: seoHome } = await getSeoHome();
    return {
        props: { ...seoHome }, // will be passed to the page component as props
    };
};
