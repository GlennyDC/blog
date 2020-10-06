import styled, { css } from 'styled-components';
import * as React from 'react';

import { Container } from '../container';

const HeaderEl = styled.header`
  ${({ theme }) => css`
    color: ${theme.colors.shade.contrastText};
    background-color: ${theme.colors.shade.main};
  `};
`;

const StyledContainer = styled(Container)`
  display: flex;
  flex-direction: row-reverse;
  img {
    width:30rem;
    display: block;
  }
`;

export const Header: React.FC = () => {
  return (
    <HeaderEl>
      <StyledContainer>
        <img src="me.png" alt="Glenny De Cock" />
      </StyledContainer>
    </HeaderEl>
  );
};
