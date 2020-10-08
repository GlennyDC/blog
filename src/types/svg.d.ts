declare module '*.svg' {
  import * as React from 'react';

  const Svg: React.FC<React.SVGProps<SVGSVGElement> & { title?: string }>;

  export default Svg;
}
