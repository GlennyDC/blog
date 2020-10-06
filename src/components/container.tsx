import styled from 'styled-components';
import * as React from 'react';

const Center = styled.div`
  padding: 0 1rem;
  max-width: 80%;
  margin: 0 auto;
`;

type Props = {
  className?: string;
};

export const Container: React.FC<Props> = ({ children, className }) => {
  return <Center className={className}>{children}</Center>;
};
