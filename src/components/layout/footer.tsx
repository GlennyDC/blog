import styled, { css } from 'styled-components';
import * as React from 'react';

const Container = styled.footer`
  display: grid;
  grid-template-columns: 1fr 2rem;
  ${({ theme }) => css`
    padding: ${theme.spacing.small};
    color: ${theme.colors.shade.contrastText};
    background-color: ${theme.colors.shade.main};
  `};
`;

export const Footer: React.FC = () => {
  return (
    <Container>
      <div>Glenny De Cock</div>
      <img src="/icons/github.svg" alt="Vercel Logo" className="logo" />
    </Container>
  );
};
