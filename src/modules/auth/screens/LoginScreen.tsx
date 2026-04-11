import { Link } from "expo-router";
import { StyleSheet, View } from "react-native";

import { routes } from "@/constants/routes";
import { Text } from "@/ui/Text";
import { TextInput } from "@/ui/TextInput";

import { AuthBranding } from "../components/AuthBranding";
import { AuthScreenFrame } from "../components/AuthScreenFrame";
import { useAuthForm } from "../hooks/useAuthForm";
import { isNonEmpty } from "../utils/validation";

export default function LoginScreen() {
  const email = useAuthForm();

  return (
    <AuthScreenFrame>
      <View style={styles.body}>
        <AuthBranding title="Sign in" subtitle="Use your email to continue." />
        <Text style={styles.label}>Email</Text>
        <TextInput
          autoCapitalize="none"
          keyboardType="email-address"
          onChangeText={email.setValue}
          placeholder="you@example.com"
          value={email.value}
        />
        <Text style={styles.hint}>
          {isNonEmpty(email.value) ? "Ready to continue" : "Enter an email to continue"}
        </Text>
        <Link href={routes.auth.register} style={styles.link}>
          Go to register
        </Link>
      </View>
    </AuthScreenFrame>
  );
}

const styles = StyleSheet.create({
  body: {
    paddingHorizontal: 20,
    gap: 8,
  },
  label: {
    fontSize: 13,
    fontWeight: "500",
    opacity: 0.8,
  },
  hint: {
    marginTop: 8,
    fontSize: 13,
    opacity: 0.65,
  },
  link: {
    marginTop: 16,
    fontSize: 16,
    fontWeight: "500",
  },
});
