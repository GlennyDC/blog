import 'styled-components';

import { spacing, colors, up, breakpoints } from '../styles/theme';

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: typeof colors;
    spacing: typeof spacing;
    up: typeof up;
    breakpoints: typeof breakpoints;
  }
}
