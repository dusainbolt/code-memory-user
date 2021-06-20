const fs = require('fs');
const globby = require('globby');

// async
// replace contents of file 'b' with contents of 'a'
const replaceContents = (file, replacement) => {
    fs.readFile(replacement, 'utf8', function (err, data) {
        if (err) {
            return console.log(err);
        }
        var result = data.replace('{DOMAIN}', process.env.DOMAIN_APP);

        fs.writeFile(file, result, 'utf8', function (err) {
            if (err) return console.log(err);
            console.log('GENERATE robots.txt done');
        });
    });
};

const generateSitemap = async () => {
    // Fetch all routes based on patterns
    // Your folder structure might be different so change bellow to match your needs
    const pages = await globby([
        'src/pages/**/*.{ts,tsx,mdx}', // All routes inside /src/pages
        '_content/**/*.mdx', // All MDX files inside my /_content
        '!src/pages/**/[*.{ts,tsx}', // Ignore my dynamic route index Example /src/pages/blog/[slug].tsx
        '!src/pages/_*.{ts,tsx}', // Ignore next.js files
        '!src/pages/api', // Ignore API routes
        '!src/pages/admin.tsx', // Ignore pages not meant to be indexed
    ]);

    const urlSet = pages
        .map(page => {
            // Remove none route related parts of filename.
            const path = page
                .replace('src/pages', '')
                .replace('_content', '')
                .replace(/(.tsx|.ts)/, '')
                .replace('.mdx', '');
            // Remove the word index from route
            const route = path === '/index' ? '' : path;
            // Build url portion of sitemap.xml
            console.log(route);
            return `<url><loc>${process.env.DOMAIN_APP}${route}</loc></url>`;
        })
        .join('');
    // Add urlSet to entire sitemap string
    const sitemap = `<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${urlSet}</urlset>`;

    // Create sitemap file
    fs.writeFileSync('public/sitemap.xml', sitemap);
    // Create robots file
    replaceContents('public/robots.txt', 'robots.example.txt');
};

module.exports = generateSitemap;
