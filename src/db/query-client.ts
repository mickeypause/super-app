import { QueryClient } from "@tanstack/react-query";

/** Single TanStack Query client for the app (required by `@tanstack/query-db-collection`). */
export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1000 * 60,
      gcTime: 1000 * 60 * 30,
      retry: 2,
      refetchOnWindowFocus: false,
    },
  },
});
