import { DefaultTheme } from 'styled-components';

const black = '#000000';
const white = '#FFFFFF';

type Breakpoints = {
  [key: string]: number;
};

export const breakpoints: Breakpoints = {
  xxxs: 0,
  xxs: 360,
  xs: 480,
  sm: 600,
  md: 960,
  lg: 1280,
  xl: 1440,
  xxl: 1600,
  xxxl: 1920,
};

export const spacing = {
  smaller: '1rem',
  small: '2rem',
  medium: '3rem',
  large: '4rem',
  larger: '5rem',
};

export const up = (breakpoint: string) => {
  return `@media (min-width:${breakpoints[breakpoint]}px)`;
};

export const colors = {
  black,
  white,
  primary: {
    300: '#64B5F6',
    500: '#2196F3',
    700: '#1976D2',
    text: black,
  },
  secondary: {
    300: '#4DD0E1',
    500: '#00BCD4',
    700: '#0097A7',
    text: black,
  },
};

export const theme: DefaultTheme = {
  breakpoints,
  spacing,
  colors,
  up,
};
