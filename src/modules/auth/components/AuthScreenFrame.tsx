import type { ReactNode } from "react";
import { StyleSheet, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

type AuthScreenFrameProps = {
  children: ReactNode;
};

/** Auth-only safe area + padding. */
export function AuthScreenFrame({ children }: AuthScreenFrameProps) {
  return (
    <SafeAreaView style={styles.safe}>
      <View style={styles.inner}>{children}</View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: {
    flex: 1,
  },
  inner: {
    flex: 1,
    paddingTop: 8,
  },
});
