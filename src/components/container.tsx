import styled, { css } from 'styled-components';
import * as React from 'react';

const DivEl = styled.div`
  margin: 0 auto;

  ${({ theme: { up, breakpoints, spacing } }) => css`
    padding: 0 ${spacing.smaller};
    ${up('xs')} {
      padding: 0;
      max-width: 80%;
    }
    ${up('lg')} {
      max-width: ${breakpoints.md}px;
    }
  `};
`;

type Props = {
  className?: string;
};

export const Container: React.FC<Props> = ({ children, className }) => {
  return <DivEl className={className}>{children}</DivEl>;
};
