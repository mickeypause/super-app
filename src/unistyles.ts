import { StyleSheet } from "react-native-unistyles";

const sharedColors = {
  barbie: "#ff9ff3",
  oak: "#784e2d",
  sky: "#1e90ff",
  white: "#ffffff",
  black: "#000000",
};

const lightTheme = {
  colors: {
    ...sharedColors,
    background: "#ffffff",
    surface: "#f5f5f7",
    text: "#111111",
    textMuted: "rgba(17, 17, 17, 0.7)",
    border: "rgba(0, 0, 0, 0.08)",
    primary: "#208AEF",
    onPrimary: "#ffffff",
  },
  gap: (v: number) => v * 8,
};

const darkTheme = {
  colors: {
    ...sharedColors,
    background: "#0b0b0f",
    surface: "#16161c",
    text: "#f5f5f7",
    textMuted: "rgba(245, 245, 247, 0.7)",
    border: "rgba(255, 255, 255, 0.12)",
    primary: "#5ab0ff",
    onPrimary: "#0b0b0f",
  },
  gap: (v: number) => v * 8,
};

const appThemes = {
  light: lightTheme,
  dark: darkTheme,
};

const breakpoints = {
  xs: 0,
  sm: 360,
  md: 600,
  lg: 900,
  xl: 1200,
};

type AppThemes = typeof appThemes;
type AppBreakpoints = typeof breakpoints;

declare module "react-native-unistyles" {
  export interface UnistylesThemes extends AppThemes {}
  export interface UnistylesBreakpoints extends AppBreakpoints {}
}

StyleSheet.configure({
  themes: appThemes,
  breakpoints,
  settings: {
    adaptiveThemes: true,
  },
});
