module.exports = {
    serverRuntimeConfig: {
        // Will only be available on the server side
        mySecret: 'secret',
        // Pass through env variables
        ENV_HOST_NAME: process.env.ENV_HOST_NAME,
        ENV_PORT: process.env.ENV_PORT,
        APOLLO_SERVER_URL: process.env.APOLLO_SERVER_URL,
        DOMAIN_IMAGE_AMAZON: process.env.DOMAIN_IMAGE_AMAZON,
        DOMAIN_SAINBOLT_APP: process.env.DOMAIN_SAINBOLT_APP,
    },
    publicRuntimeConfig: {
        // Will be available on both server and client
        staticFolder: '/static',
    },
    exportPathMap: async (defaultPathMap, { dev, dir, outDir, distDir, buildId }) => {
        console.log('--------buildID => ', buildId);
        console.log('--------dev => ', dev);
        return {
            '/': { page: '/' },
            '/about': { page: '/about' },
        };
    },
    trailingSlash: true,
    images: {
        loader: 'imgix',
        path: '../',
    },
};
