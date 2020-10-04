import * as React from 'react';
import { AppProps } from 'next/app';
import { ThemeProvider } from 'styled-components';

import { theme , GlobalStyle } from '../style';

const CustomApp = ({ Component, pageProps }: AppProps) => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Component {...pageProps} />
    </ThemeProvider>
  );
};

export default CustomApp;
