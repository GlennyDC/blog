import * as React from 'react';
import styled from 'styled-components';

const ImgEl = styled.img`
  border-radius: 50%;
  width: 100%;
  height: auto;
`;

type Props = {
  className?: string;
  src: string;
  alt: string;
};

export const Avatar: React.FC<Props> = ({ className, src, alt }) => {
  return <ImgEl src={src} alt={alt} className={className} />;
};
