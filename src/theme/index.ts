import {StyleSheet} from 'react-native';
import {useThemeContext} from '@contexts/ThemeContext';

export const useThemeColors = () => {
  const {isDark} = useThemeContext();

  const colorsLight: Colors = {
    skeleton: '#A1A1A1',
    red500: '#C13333',
    gray800: '#303030',
    gray400: '#4D4D4D',
    gray200: '#A1A1A1',
    gray100: '#DFDFDF',
    gray50: '#EFEFEF',
    white: '#FFFFFF',
    fixedWhite: '#FFFFFF',
    black: '#000000',
    fixedBlack: '#000000',
    blue700: '#034ef2',
    fixedblue700: '#034ef2',
    blue600: '#0a65ff',
    blue500: '#2187ff',
    blue400: '#529fff',
    blue200: '#b1dfff',
    blue100: '#d4eeff',
    orange: '#f04006',
  } as const;

  const colorsDark: Colors = {
    skeleton: '#303030',
    red500: '#C13333',
    gray800: '#E0E0E0',
    gray400: '#E0E0E0',
    gray200: '#BABABA',
    gray100: '#000000',
    gray50: '#000000',
    white: '#303030',
    fixedWhite: '#FFFFFF',
    black: '#FFFFFF',
    fixedBlack: '#000000',
    blue700: '#000000',
    fixedblue700: '#2187ff',
    blue600: '#0a65ff',
    blue500: '#357ABD',
    blue400: '#4F9FDF',
    blue200: '#75B3FF',
    blue100: '#A2C8FF',
    orange: '#f04006',
  } as const;

  return isDark ? colorsDark : colorsLight;
};

export const fontSize = {
  xs: 12,
  s: 14,
  m: 16,
  l: 22,
  xl: 28,
  '2xl': 32,
  '3xl': 40,
};

export const gutters = {
  xs: 2,
  s: 4,
  m: 8,
  l: 12,
  xl: 16,
  '2xl': 20,
  '3xl': 24,
  '4xl': 32,
  '5xl': 40,
};

export const layout = StyleSheet.create({
  col: {
    flexDirection: 'column',
  },
  colReverse: {
    flexDirection: 'column-reverse',
  },
  wrap: {
    flexWrap: 'wrap',
  },
  row: {
    flexDirection: 'row',
  },
  rowReverse: {
    flexDirection: 'row-reverse',
  },
  itemsCenter: {
    alignItems: 'center',
  },
  itemsStart: {
    alignItems: 'flex-start',
  },
  itemsStretch: {
    alignItems: 'stretch',
  },
  itemsEnd: {
    alignItems: 'flex-end',
  },
  justifyCenter: {
    justifyContent: 'center',
  },
  justifyAround: {
    justifyContent: 'space-around',
  },
  justifyBetween: {
    justifyContent: 'space-between',
  },
  justifyEnd: {
    justifyContent: 'flex-end',
  },
  justifyStart: {
    justifyContent: 'flex-start',
  },
  /* Sizes Layouts */
  flex_1: {
    flex: 1,
  },
  fullWidth: {
    width: '100%',
  },
  fullHeight: {
    height: '100%',
  },
  /* Positions */
  relative: {
    position: 'relative',
  },
  absolute: {
    position: 'absolute',
  },
  top0: {
    top: 0,
  },
  bottom0: {
    bottom: 0,
  },
  left0: {
    left: 0,
  },
  right0: {
    right: 0,
  },
  z1: {
    zIndex: 1,
  },
  z10: {
    zIndex: 10,
  },
});
