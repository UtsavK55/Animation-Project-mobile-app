interface ThemeContextType {
  isDark: boolean;
  setIsDark: Dispatch<SetStateAction<boolean>>;
}

interface Colors {
  skeleton: string;
  red500: string;
  gray800: string;
  gray400: string;
  gray200: string;
  gray100: string;
  gray50: string;
  white: string;
  fixedWhite: string;
  black: string;
  fixedBlack: string;
  blue700: string;
  fixedblue700: string;
  blue600: string;
  blue500: string;
  blue400: string;
  blue200: string;
  blue100: string;
  orange: string;
}

type ScalingMetrics = {
  horizontalScale: (size: number) => number;
  verticalScale: (size: number) => number;
  moderateScale: (size: number, factor?: number) => number;
  wp: (widthPercent: number | string) => number;
  hp: (heightPercent: number | string) => number;
  scaleSize: (size: number, factor?: number) => number;
  isLandscape: () => boolean;
};

type NamedStyles<T> = {[P in keyof T]: ViewStyle | TextStyle | ImageStyle};

type ThemedStyleFunction<T> = (
  themeColors: Colors,
  scalingMetrics: ScalingMetrics,
  scale?: Animated.Value,
  value?: Animated.Value,
  translateY?: Animated.Value,
  fadeAnim?: Animated.Value,
) => T;
