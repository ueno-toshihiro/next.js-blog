import * as React from 'react';
import SvgIcon, { Props } from './svg-icon/svg-icon';
const Filter: React.FC<Props> = (props) => (
  <SvgIcon viewBox="0 0 36 36" {...props}>
    <g
      strokeWidth="1.5"
      fillRule="evenodd"
      strokeLinecap="round"
      strokeLinejoin="round"
      transform="translate(9, 10)"
    >
      <polygon points="19 0 0 0 7.6 8.93444444 7.6 15.1111111 11.4 17 11.4 8.93444444" />
    </g>
  </SvgIcon>
);
Filter.displayName = 'Filter';
export default Filter;
