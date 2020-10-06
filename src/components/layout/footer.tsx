import styled, { css } from 'styled-components';
import * as React from 'react';

import { Container } from '../container';

const FooterEl = styled.footer`
  ${({ theme }) => css`
    color: ${theme.colors.shade.contrastText};
    background-color: ${theme.colors.shade.main};
    padding: ${theme.spacing.smaller} 0;
  `};
`;

const StyledContainer = styled(Container)`
  display: grid;
  grid-template-columns: 1fr 2rem;
  grid-column-gap: 1rem;
  align-items: center;
`;

export const Footer: React.FC = () => {
  return (
    <FooterEl>
      <StyledContainer>
        <div>Glenny De Cock &copy; {new Date().getFullYear()}</div>
        <img src="/icons/github.svg" alt="Github logo" />
      </StyledContainer>
    </FooterEl>
  );
};
