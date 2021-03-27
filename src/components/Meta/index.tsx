import PropTypes from 'prop-types';
import Head from 'next/head';

const HeadSEO = ({ title = 'Sainbolt App' }) => (
    <Head>
        <title>{title}</title>
        <meta
            name="description"
            content="dusainbolt/base-nextjs development by creating an account on GitHub."
        />
    </Head>
);

HeadSEO.propTypes = {
    title: PropTypes.string.isRequired,
};

export default HeadSEO;
