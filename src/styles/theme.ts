const black = '#000000';
const white = '#FFFFFF';

const breakpoints: { [key: string]: number } = {
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

const up = (breakpoint: string) => {
  return `@media (min-width:${breakpoints[breakpoint]}px)`;
};

export const theme = {
  spacing: {
    smaller: '1rem',
    small: '2rem',
    medium: '3rem',
    large: '4rem',
    larger: '5rem',
  },
  breakpoints,
  colors: {
    black,
    white,
    primary: {
      light: '#2196F3',
      main: '#1E88E5',
      dark: '#1976D2',
      contrastText: white,
    },
    shade: {
      light: '#FAFAFA',
      main: '#F5F5F5',
      dark: '#EEEEEE',
      contrastText: black,
    },
  },
  up,
};
