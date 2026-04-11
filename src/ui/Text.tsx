import { Text as RNText, type TextProps as RNTextProps } from "react-native";

/** App text primitive — extend with tokens / variants over time. */
export function Text(props: RNTextProps) {
  return <RNText {...props} />;
}
