import type { ReactNode } from "react";
import { QueryClientProvider } from "@tanstack/react-query";

import { queryClient } from "./query-client";

type AppQueryProviderProps = {
  children: ReactNode;
};

/** Wraps the tree with TanStack Query (required for query-backed DB collections). */
export function AppQueryProvider({ children }: AppQueryProviderProps) {
  return <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>;
}
