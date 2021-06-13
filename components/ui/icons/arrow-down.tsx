import * as React from 'react';
import SvgIcon, { Props } from './svg-icon/svg-icon';
const ArrowDown: React.FC<Props> = (props) => (
  <SvgIcon viewBox="0 0 36 36" {...props}>
    <path
      d="M11 15l7 7 7-7"
      strokeWidth="1.5"
      fillRule="evenodd"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </SvgIcon>
);
ArrowDown.displayName = 'ArrowDown';
export default ArrowDown;
