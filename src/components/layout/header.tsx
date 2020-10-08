import styled, { css } from 'styled-components';
import * as React from 'react';
import { Avatar } from '../avatar';

const HeaderEl = styled.header`
  height: 8rem;
  ${({ theme: { colors, up } }) => css`
    background-color: ${colors.primary[500]};
    margin-bottom: 6rem;

    ${up('sm')} {
      height: 10rem;
      margin-bottom: 8rem;
    }
    ${up('md')} {
      height: 12rem;
      margin-bottom: 10rem;
    }
  `};
`;

const StyledAvatar = styled(Avatar)`
  position: absolute;
  left: 0;
  right: 0;
  top: 4rem;
  margin: auto;
  width: 6rem;

  ${({ theme: { up, colors } }) => css`
    border: 0.5rem solid ${colors.secondary[300]};
    ${up('sm')} {
      top: 5rem;
      width: 8rem;
    }
    ${up('md')} {
      top: 6rem;
      width: 10rem;
    }
  `};
`;

export const Header: React.FC = () => {
  return (
    <HeaderEl>
      <StyledAvatar src="/img/me.jpg" alt="Glenny De Cock" />
    </HeaderEl>
  );
};
