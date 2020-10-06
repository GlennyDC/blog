import styled from 'styled-components';
import * as React from 'react';

import { GitHubIcon, LinkedInIcon } from '@/assets';

const Container = styled.div`
  display: grid;
  grid-column-gap: 1rem;
  grid-template-columns: repeat(2, 2rem);
`;

const AnchorEl = styled.a`
  &:hover,
  &:focus {
    svg {
      fill: red;
    }
  }
  svg {
    transition: fill 300ms ease;
    display: block;
  }
`;

export const Socials: React.FC = () => {
  return (
    <Container>
      <AnchorEl
        href="https://github.com/GlennyDC"
        target="_blank"
        rel="noopener noreferrer"
      >
        <GitHubIcon />
      </AnchorEl>
      <AnchorEl
        href="https://www.linkedin.com/in/glenny-de-cock/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <LinkedInIcon />
      </AnchorEl>
    </Container>
  );
};
