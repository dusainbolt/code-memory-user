import { Fragment } from 'react';
import Meta, { SeoHome } from '@Components/Meta';
import Header from '@Components/Header';
import Footer from '@Components/Footer';
import { getSeoHome } from '@Services/seo-home-request';
import { GetStaticProps } from 'next';

export interface IAboutPage {
    seoHome: SeoHome;
}

const AboutPage: React.FC<IAboutPage> = props => {
    return (
        <Fragment>
            <Meta seoHome={props.seoHome} />
            <Header />
            <Footer />
        </Fragment>
    );
};

export default AboutPage;

export const getStaticProps: GetStaticProps = async () => {
    const { data: seoHome } = await getSeoHome();
    return {
        props: { ...seoHome }, // will be passed to the page component as props
    };
};
