import * as React from 'react';
import SvgIcon, { Props } from './svg-icon/svg-icon';
const Options: React.FC<Props> = (props) => (
  <SvgIcon viewBox="0 0 36 36" {...props}>
    <g
      strokeWidth="1.2"
      fillRule="evenodd"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M18.286 15.857a2.287 2.287 0 11-.002 4.573 2.287 2.287 0 01.002-4.573zM27.429 15.857a2.287 2.287 0 11-.002 4.573 2.287 2.287 0 01.002-4.573zM9.143 15.857a2.287 2.287 0 11-.002 4.573 2.287 2.287 0 01.002-4.573z" />
    </g>
  </SvgIcon>
);
Options.displayName = 'Options';
export default Options;
