import { StyleSheet, View } from "react-native";

import { Text } from "@/ui/Text";

type AuthBrandingProps = {
  title: string;
  subtitle?: string;
};

/** Auth-only UI; keep auth-specific visuals out of `src/ui`. */
export function AuthBranding({ title, subtitle }: AuthBrandingProps) {
  return (
    <View style={styles.wrap}>
      <Text style={styles.title}>{title}</Text>
      {subtitle ? <Text style={styles.subtitle}>{subtitle}</Text> : null}
    </View>
  );
}

const styles = StyleSheet.create({
  wrap: {
    marginBottom: 24,
    gap: 6,
  },
  title: {
    fontSize: 24,
    fontWeight: "600",
  },
  subtitle: {
    fontSize: 15,
    opacity: 0.7,
  },
});
