import PropTypes from 'prop-types';
import Head from 'next/head';

const HeadSEO = ({ title = 'Sainbolt App', siteTitle = 'SEO - Title', description = 'DESCRIPTION ABOUT' }) => {
    return (
        <Head>
            <title>{`${title} | ${siteTitle}`}</title>
            <meta name="description" content={description} />
            <meta property="og:type" content="website" />
            <meta property="og:title" content={title} />
            <meta property="og:description" content={description} />
            <meta property="og:site_name" content={siteTitle} />
            <meta property="twitter:card" content="summary" />
            {/* <meta property="twitter:creator" content={config.social.twitter} /> */}
            <meta property="twitter:title" content={title} />
            <meta property="twitter:description" content={description} />
        </Head>
    );
};

HeadSEO.propTypes = {
    title: PropTypes.string.isRequired,
};

export default HeadSEO;
