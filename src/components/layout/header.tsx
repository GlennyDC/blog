import styled, { css } from 'styled-components';
import * as React from 'react';
import { Container } from 'components/container';
import { Avatar } from '../avatar';
import { Socials } from './socials';

const HeaderEl = styled.header`
  padding: 1rem 0;
  ${({ theme: { colors } }) => css`
    background-color: ${colors.primary[500]};
    margin-bottom: 6rem;
  `};
`;

const Credentials = styled.div`
  display: flex;
  align-items: center;
`;

const StyledAvatar = styled(Avatar)`
  width: 3rem;
  margin-right: 1rem;

  ${({ theme: { up } }) => css`
    ${up('sm')} {
      width: 4rem;
    }
    ${up('md')} {
      width: 5rem;
    }
  `};
`;

const StyledContainer = styled(Container)`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Header: React.FC = () => {
  return (
    <HeaderEl>
      <StyledContainer>
        <Credentials>
          <StyledAvatar src="/img/me.jpg" alt="Glenny De Cock" />
          <span>Glenny De Cock</span>
        </Credentials>
        <Socials />
      </StyledContainer>
    </HeaderEl>
  );
};
