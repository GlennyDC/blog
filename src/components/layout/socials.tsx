import styled, { css } from 'styled-components';
import * as React from 'react';

import { GitHubIcon, LinkedInIcon } from '@/assets';

const Container = styled.div`
  display: grid;
  grid-column-gap: 1rem;
  grid-template-columns: repeat(2, 2rem);
`;

const AnchorEl = styled.a`
  ${({ theme: { colors } }) => css`
    svg {
      fill: ${colors.primary[300]};
      transition: fill 300ms ease;
      display: block;
    }
    &:hover,
    &:focus {
      svg {
        fill: ${colors.primary[700]};
      }
    }
  `};
`;

export const Socials: React.FC = () => {
  return (
    <Container>
      <AnchorEl
        href="https://github.com/GlennyDC"
        target="_blank"
        rel="noopener noreferrer"
        title="Go to my GitHub"
      >
        <GitHubIcon />
      </AnchorEl>
      <AnchorEl
        href="https://www.linkedin.com/in/glenny-de-cock/"
        target="_blank"
        rel="noopener noreferrer"
        title="Go to my LinkedIn"
      >
        <LinkedInIcon />
      </AnchorEl>
    </Container>
  );
};
