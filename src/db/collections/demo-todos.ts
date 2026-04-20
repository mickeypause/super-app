import { createCollection } from "@tanstack/react-db";
import { queryCollectionOptions } from "@tanstack/query-db-collection";

import { queryClient } from "../query-client";

/** JSONPlaceholder todo row (subset of fields). */
export type DemoTodo = {
  id: number;
  userId: number;
  title: string;
  completed: boolean;
};

/** Demo collection: read-only remote fetch via TanStack Query. */
export const demoTodosCollection = createCollection(
  queryCollectionOptions({
    queryKey: ["demo-todos"],
    queryFn: async () => {
      const response = await fetch("https://jsonplaceholder.typicode.com/todos?_limit=12");
      if (!response.ok) {
        throw new Error(`HTTP ${response.status}`);
      }
      return response.json() as Promise<DemoTodo[]>;
    },
    queryClient,
    getKey: (item) => item.id,
    staleTime: 1000 * 60 * 5,
  }),
);
