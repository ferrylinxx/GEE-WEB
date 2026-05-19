import createMiddleware from "next-intl/middleware";
import { routing } from "./i18n/routing";

export default createMiddleware(routing);

export const config = {
  matcher: [
    // Match all routes except static files, API, Next.js internals
    "/((?!api|_next|_vercel|.*\\..*).*)",
  ],
};
