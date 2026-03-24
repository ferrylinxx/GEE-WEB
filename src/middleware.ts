import createMiddleware from "next-intl/middleware";
import { routing } from "./i18n/routing";

export default createMiddleware(routing);

export const config = {
  matcher: [
    // Only match locale-prefixed routes and the root
    // Exclude: static files, API, Next.js internals, images, SEO files
    "/",
    "/(ca|es|en)",
    "/(ca|es|en)/:path*",
  ],
};
