import createMiddleware from 'next-intl/middleware';
import { NextFetchEvent, NextMiddleware } from "next/server";

export default withExtraMiddleware(
    createMiddleware({
        defaultLocale: 'es',
        locales: ['es', 'en']
    })
);

function withExtraMiddleware(next: NextMiddleware) {
    return async (request: any, event: NextFetchEvent) => {

        request.headers.set("pathname", request.nextUrl.pathname);
        const response = await next(request, event);

        return response
    };
}

export const config = {
    matcher: ['/((?!api|_next|.*\\..*).*)']
};