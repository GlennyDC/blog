import styled, { css } from 'styled-components';
import * as React from 'react';

import { Socials } from './socials';
import { Container } from '../container';

const FooterEl = styled.footer`
  ${({ theme: { colors, spacing } }) => css`
    color: ${colors.primary.text};
    background-color: ${colors.primary[500]};
    padding: ${spacing.smaller} 0;
  `};
`;

const StyledContainer = styled(Container)`
  display: grid;
  grid-template-columns: 1fr max-content;
  grid-column-gap: 1rem;
  align-items: center;
`;

export const Footer: React.FC = () => {
  return (
    <FooterEl>
      <StyledContainer>
        <div>Glenny De Cock &copy; {new Date().getFullYear()}</div>
        <Socials />
      </StyledContainer>
    </FooterEl>
  );
};
