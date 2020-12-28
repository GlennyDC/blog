import * as React from 'react';
import { Container } from '../container';
import { Header } from './header';

export const Layout: React.FC = ({ children }) => {
  return (
    <>
      <Header />
      <Container>{children}</Container>
    </>
  );
};
