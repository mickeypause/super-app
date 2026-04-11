import type { ReactNode } from "react";
import {
  Pressable,
  type PressableProps,
  type StyleProp,
  StyleSheet,
  type ViewStyle,
} from "react-native";

import { Text } from "./Text";

type ButtonProps = Omit<PressableProps, "children" | "style"> & {
  children: ReactNode;
  style?: StyleProp<ViewStyle>;
};

/** Primary pressable; pass a string child for default label styling. */
export function Button({ children, style, ...rest }: ButtonProps) {
  return (
    <Pressable accessibilityRole="button" style={[styles.press, style]} {...rest}>
      {typeof children === "string" || typeof children === "number" ? (
        <Text style={styles.label}>{children}</Text>
      ) : (
        children
      )}
    </Pressable>
  );
}

const styles = StyleSheet.create({
  press: {
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center",
  },
  label: {
    fontSize: 16,
    fontWeight: "600",
  },
});
