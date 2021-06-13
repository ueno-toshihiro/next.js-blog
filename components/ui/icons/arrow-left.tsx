import * as React from 'react';
import SvgIcon, { Props } from './svg-icon/svg-icon';
const ArrowLeft: React.FC<Props> = (props) => (
  <SvgIcon viewBox="0 0 36 36" {...props}>
    <path
      d="M22 9l-8.803 8.614c-.263.257-.263.643 0 .772L22 27"
      strokeWidth="1.5"
      fillRule="evenodd"
      strokeLinecap="round"
    />
  </SvgIcon>
);
ArrowLeft.displayName = 'ArrowLeft';
export default ArrowLeft;
