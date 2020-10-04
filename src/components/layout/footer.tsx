import styled from 'styled-components';
import * as React from 'react';

const Container = styled.footer`
  position: fixed;
  bottom: 0;
  width: 100%;
`;

export const Footer: React.FC = () => {
  return (
    <Container>
      <p>Link 1</p>
      <p>Link 2</p>
    </Container>
  );
};
