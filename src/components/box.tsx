import styled from 'styled-components';
import * as React from 'react';

const Container = styled.div`

`;

export const Box: React.FC = ({children}) => {
  return (
    <Container>
      {children}
    </Container>
  );
};
