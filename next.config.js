const generateSitemap = require('./generate-sitemap');

module.exports = {
    serverRuntimeConfig: {
        // Will only be available on the server side
        mySecret: 'secret',
        // Pass through env variables
        ENV_HOST_NAME: process.env.ENV_HOST_NAME,
        ENV_PORT: process.env.ENV_PORT,
        APOLLO_SERVER_URL: process.env.APOLLO_SERVER_URL,
        DOMAIN_IMAGE_AMAZON: process.env.DOMAIN_IMAGE_AMAZON,
    },
    publicRuntimeConfig: {
        // Will be available on both server and client
        DOMAIN_APP: process.env.DOMAIN_APP,
        staticFolder: '/static',
    },
    // exportPathMap: async (defaultPathMap, { dev, dir, outDir, distDir, buildId }) => {
    //     console.log('--------buildID => ', buildId);
    //     console.log('--------dev => ', dev);
    //     console.log('--------dev => ', defaultPathMap);

    //     return {
    //         '/': { page: '/' },
    //         '/about': { page: '/about' },
    //     };
    // },
    webpack: (config, { isServer }) => {
        if (isServer) {
            generateSitemap();
        }
        return config;
    },
    // trailingSlash: true,
    images: {
        loader: 'imgix',
        path: '',
    },
    // images: {
    //     domains: ['d1.awsstatic.com'],
    // }
};
