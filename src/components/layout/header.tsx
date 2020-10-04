import styled from 'styled-components';
import * as React from 'react';

const Container = styled.header`
  width: 100%;
`;

export const Header: React.FC = () => {
  return (
    <Container>
      <p>Link 1</p>
      <p>Link 2</p>
    </Container>
  );
};
