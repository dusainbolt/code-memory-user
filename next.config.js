const generateSitemap = require('./generate-sitemap');

module.exports = {
    serverRuntimeConfig: {
        // Will only be available on the server side
        mySecret: 'secret',
        // Pass through env variables
        APOLLO_SERVER_URL: process.env.APOLLO_SERVER_URL,
    },
    publicRuntimeConfig: {
        // Will be available on both server and client
        CLIENT_DOMAIN_APP: process.env.DOMAIN_APP,
        CLIENT_GOOGLE_CLIENT_ID: process.env.GOOGLE_CLIENT_ID,
        CLIENT_APOLLO_SERVER_URL: process.env.APOLLO_SERVER_URL,
        CLIENT_STATIC_FOLDER: '/static',
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
    trailingSlash: true,
    images: {
        loader: 'imgix',
        path: '',
    },
    // images: {
    //     domains: ['d1.awsstatic.com'],
    // }
};
