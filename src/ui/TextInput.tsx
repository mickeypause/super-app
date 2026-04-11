import {
  StyleSheet,
  TextInput as RNTextInput,
  type TextInputProps as RNTextInputProps,
} from "react-native";

/** App text field primitive — shared styling only; screens stay in modules. */
export function TextInput({ style, ...rest }: RNTextInputProps) {
  return <RNTextInput style={[styles.base, style]} {...rest} />;
}

const styles = StyleSheet.create({
  base: {
    borderWidth: StyleSheet.hairlineWidth,
    borderRadius: 8,
    paddingHorizontal: 12,
    paddingVertical: 10,
    fontSize: 16,
  },
});
