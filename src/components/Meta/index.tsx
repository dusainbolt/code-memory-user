import PropTypes from 'prop-types';
import Head from 'next/head';
import { memo } from 'react';

const HeadSEO = ({ title = 'Sainbolt App', description = 'DESCRIPTION ABOUT' }) => {
    return (
        <Head>
            <title>{title}</title>
            <meta name="description" content={description || `dusainbolt/base-nextjs development by creating an account on GitHub.`} />
        </Head>
    );
};

HeadSEO.propTypes = {
    title: PropTypes.string.isRequired,
};

export default memo(HeadSEO);
