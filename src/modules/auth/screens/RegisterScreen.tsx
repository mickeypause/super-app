import { Link } from "expo-router";
import { StyleSheet, View } from "react-native";

import { routes } from "@/constants/routes";
import { Text } from "@/ui/Text";

import { AuthBranding } from "../components/AuthBranding";
import { AuthScreenFrame } from "../components/AuthScreenFrame";

export default function RegisterScreen() {
  return (
    <AuthScreenFrame>
      <View style={styles.body}>
        <AuthBranding title="Create account" subtitle="Placeholder register flow." />
        <Text style={styles.copy}>Add fields and wire to your backend here.</Text>
        <Link href={routes.auth.login} style={styles.link}>
          Back to sign in
        </Link>
      </View>
    </AuthScreenFrame>
  );
}

const styles = StyleSheet.create({
  body: {
    paddingHorizontal: 20,
    gap: 12,
  },
  copy: {
    fontSize: 15,
    lineHeight: 22,
    opacity: 0.75,
  },
  link: {
    marginTop: 8,
    fontSize: 16,
    fontWeight: "500",
  },
});
