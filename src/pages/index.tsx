import { Fragment } from 'react';
import Meta from '@Components/Meta';
import HomePageComponent from '@Components/Pages/Home';
import Header from '@Components/Header';
import Footer from '@Components/Footer';
import 'swiper/swiper.min.css';
import { getSeoHome } from '@Services/seo-home-request';

export default function IndexPage(props) {
    return (
        <Fragment>
            <Meta seoHome={props.seoHome}/>
            <Header />
            <HomePageComponent {...props} />
            <Footer />
        </Fragment>
    );
}

export async function getStaticProps(context) {
    const { data: seoHome } = await getSeoHome();
    return {
        props: { ...seoHome }, // will be passed to the page component as props
    };
}
