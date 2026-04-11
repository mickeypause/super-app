/**
 * Stable route paths for `Link` / `router.push`.
 * Route groups like `(auth)` do not appear in the URL.
 */
export const routes = {
  home: "/",
  auth: {
    login: "/login",
    register: "/register",
  },
} as const;
