import createMiddleware from "next-intl/middleware";
import { routing } from "./i18n/routing";

export default createMiddleware(routing);

export const config = {
  matcher: [
    // Match all pathnames except for
    // - /api (API routes)
    // - /_next (Next.js internals)
    // - /images, /logo.png, etc. (static files)
    "/((?!api|_next|images|sitemap\\.xml|robots\\.txt|.*\\..*|manifest\\.json|favicon\\.ico).*)",
  ],
};
