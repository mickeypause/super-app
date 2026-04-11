import { Link } from "expo-router";
import { StyleSheet, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { routes } from "@/constants/routes";
import { Text } from "@/ui/Text";

/** Root `/` screen — pairs with `src/app/index.tsx`. */
export default function HomeScreen() {
  return (
    <SafeAreaView style={styles.safe}>
      <View style={styles.body}>
        <Text style={styles.title}>super-app</Text>
        <Text style={styles.subtitle}>
          Routes in `src/app`; features in `src/modules`; primitives in `src/ui`.
        </Text>
        <Link href={routes.auth.login} style={styles.link}>
          Sign in
        </Link>
        <Link href={routes.auth.register} style={styles.link}>
          Register
        </Link>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: {
    flex: 1,
  },
  body: {
    flex: 1,
    paddingHorizontal: 24,
    justifyContent: "center",
    gap: 12,
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
    marginBottom: 16,
  },
  link: {
    fontSize: 17,
    fontWeight: "600",
    paddingVertical: 4,
  },
});
