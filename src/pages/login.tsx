import { FC, Fragment } from 'react';
import Meta, { SeoHome } from '@Common/Meta';
import Header from '@Common/Header';
import Footer from '@Common/Footer';

import 'swiper/swiper.min.css';
import { getSeoHome } from '@Services/seo-home-request';
import { GetStaticProps } from 'next';
import useTranslation from '@Common/LanguageProvider/useTranslation';

interface IIndexPage {
    seoHome: SeoHome;
}

const IndexPage: FC<IIndexPage> = props => {
    const { t } = useTranslation();
    return (
        <Fragment>
            <Meta title={t('login.title_meta')} seoHome={props.seoHome} />
            <Header />
            {/* <HomePageComponent {...props} /> */}
            <Footer />
        </Fragment>
    );
};

export default IndexPage;

export const getStaticProps: GetStaticProps = async () => {
    const { data: seoHome } = await getSeoHome();
    return {
        props: { ...seoHome }, // will be passed to the page component as props
        // Re-generate the post at most once per second
        // if a request comes in
        revalidate: 1800,
    };
};
