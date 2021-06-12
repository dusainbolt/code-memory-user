// import Nav from '../components/nav';
import { Fragment } from 'react';
import Meta from '@Components/Meta';
import Header from '@Components/Header';
import Footer from '@Components/Footer';
import { getSeoHome } from '@Services/seo-home-request';

export default function IndexPage(props) {
    return (
        <Fragment>
            <Meta title={'DAY LA TRANG ABOUT'} description="Sainbolt app - description about" />
            <Header />
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
