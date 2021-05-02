import PropTypes from 'prop-types';
import Head from 'next/head';

const HeadSEO = ({ title = 'Sainbolt App', siteTitle = 'SEO - Title', description = 'DESCRIPTION Du Sainbolt' }) => {
    return (
        <Head>
            <title>{`${title} | ${siteTitle}`}</title>
            <meta name="description" content={description} />
            <meta name="keywords" content="Du Sainbolt, Sainbolt App, Blog Du Sainbolt" />
            <meta name="author" content="Du Sainbolt" />
            <meta property="og:type" content="Du Sainbolt OG Title" />
            <meta property="og:title" content={title} />
            <meta property="og:description" content={description} />
            <meta property="og:site_name" content={siteTitle} />
            <meta property="og:image" content="/images/avatar_home_page.png" />
            <meta property="twitter:card" content="summary" />
            <meta property="og:url" content="https://du-sainbolt.web.app" />
            {/* <meta property="twitter:creator" content={config.social.twitter} /> */}
            {/* <meta property="twitter:title" content={title} />
            <meta property="twitter:description" content={description} /> */}
        </Head>
    );
};

HeadSEO.propTypes = {
    title: PropTypes.string.isRequired,
};

export default HeadSEO;
