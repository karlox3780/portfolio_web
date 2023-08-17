import createMiddleware from 'next-intl/middleware';

export default createMiddleware({
    defaultLocale: 'es',
    locales: ['es', 'en'],
    localeDetection: false
});

export const config = {
    matcher: ['/((?!api|_next|.*\\..*).*)']
};