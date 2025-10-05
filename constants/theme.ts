/**
 * Below are the colors that are used in the app. The colors are defined in the light and dark mode.
 * There are many other ways to style your app. For example, [Nativewind](https://www.nativewind.dev/), [Tamagui](https://tamagui.dev/), [unistyles](https://reactnativeunistyles.vercel.app), etc.
 */

import { Platform } from 'react-native';


export const Colors = {
  light: {
    primary: "#8878F4",
    dark: "#1A1A1A",
    lightDark: "#262626",
    accent: "#F97068",
    background: "#EDF2EF",
    highlight: "#D1D646",
    white: "#FFFFFF",
    lightGrey: "#A0A0A0",
    grey: "#494949",
    error: "#FF0000",
    ethereum: "#C8B3F4",
    solana: "#00DCFA",
    primaryLinearGradient: ["#8878F4", "#6155AC"],
    secondaryLinearGradient: ["#1A1A1A", "#262626"],
  },
  dark: {
    primary: "#8878F4",
    dark: "#1A1A1A",
    lightDark: "#262626",
    accent: "#F97068",
    background: "#EDF2EF",
    highlight: "#D1D646",
    white: "#FFFFFF",
    lightGrey: "#A0A0A0",
    grey: "#494949",
    error: "#FF0000",
    ethereum: "#C8B3F4",
    solana: "#00DCFA",
    primaryLinearGradient: ["#8878F4", "#6155AC"],
    secondaryLinearGradient: ["#1A1A1A", "#262626"],
  },
};

export const Fonts = Platform.select({
  ios: {
    /** iOS `UIFontDescriptorSystemDesignDefault` */
    sans: 'system-ui',
    /** iOS `UIFontDescriptorSystemDesignSerif` */
    serif: 'ui-serif',
    /** iOS `UIFontDescriptorSystemDesignRounded` */
    rounded: 'ui-rounded',
    /** iOS `UIFontDescriptorSystemDesignMonospaced` */
    mono: 'ui-monospace',
  },
  default: {
    sans: 'normal',
    serif: 'serif',
    rounded: 'normal',
    mono: 'monospace',
  },
  web: {
    sans: "system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif",
    serif: "Georgia, 'Times New Roman', serif",
    rounded: "'SF Pro Rounded', 'Hiragino Maru Gothic ProN', Meiryo, 'MS PGothic', sans-serif",
    mono: "SFMono-Regular, Menlo, Monaco, Consolas, 'Liberation Mono', 'Courier New', monospace",
  },
});
