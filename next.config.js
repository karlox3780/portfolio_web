const withNextIntl = require('next-intl/plugin')(
    './i18n.ts'
);

module.exports = withNextIntl({
    async redirects() {
        return [
            {
                source: '/',
                destination: '/projects',
                permanent: true,
            },
        ]
    }
});