import { Link } from "expo-router";
import { ActivityIndicator, ScrollView, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { eq, useLiveQuery } from "@tanstack/react-db";

import { routes } from "@/constants/routes";
import { demoTodosCollection } from "@/db/collections/demo-todos";
import { Text } from "@/ui/Text";

/** Root `/` screen — pairs with `src/app/index.tsx`. */
export default function HomeScreen() {
  const {
    data: todos,
    isLoading,
    isError,
  } = useLiveQuery((q) =>
    q.from({ todo: demoTodosCollection }).where(({ todo }) => eq(todo.completed, false)),
  );

  return (
    <SafeAreaView style={styles.safe}>
      <ScrollView contentContainerStyle={styles.body}>
        <Text style={styles.title}>super-app</Text>
        <Text style={styles.subtitle}>
          Routes in `src/app`; features in `src/modules`; TanStack DB in `src/db`.
        </Text>

        <Text style={styles.section}>Open todos (TanStack DB live query)</Text>
        {isLoading ? <ActivityIndicator style={styles.spinner} /> : null}
        {isError ? (
          <Text style={styles.muted}>Could not load demo todos. Check network.</Text>
        ) : null}
        {!isLoading && !isError && todos
          ? todos.map((row) => (
              <Text key={row.id} style={styles.todoLine} numberOfLines={2}>
                {row.title}
              </Text>
            ))
          : null}

        <Link href={routes.auth.login} style={styles.link}>
          Sign in
        </Link>
        <Link href={routes.auth.register} style={styles.link}>
          Register
        </Link>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: {
    flex: 1,
  },
  body: {
    paddingHorizontal: 24,
    paddingBottom: 32,
    gap: 10,
  },
  title: {
    fontSize: 28,
    fontWeight: "700",
    marginBottom: 4,
  },
  subtitle: {
    fontSize: 15,
    lineHeight: 22,
    opacity: 0.75,
    marginBottom: 8,
  },
  section: {
    fontSize: 16,
    fontWeight: "600",
    marginTop: 8,
  },
  spinner: {
    marginVertical: 8,
  },
  muted: {
    fontSize: 14,
    opacity: 0.7,
  },
  todoLine: {
    fontSize: 14,
    lineHeight: 20,
    opacity: 0.85,
  },
  link: {
    fontSize: 17,
    fontWeight: "600",
    paddingVertical: 6,
    marginTop: 8,
  },
});
