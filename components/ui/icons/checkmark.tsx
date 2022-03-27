import * as React from 'react';
import SvgIcon, { Props } from './svg-icon/svg-icon';

export const Checkmark: React.FC<Props> = (props) => (
  <SvgIcon {...props}>
    <path d="M2.384 12.347a.5.5 0 1 0-.768.64l6.657 7.996a.5.5 0 0 0 .765.005L23.23 4.324a.5.5 0 0 0-.761-.648L8.66 19.887l-6.277-7.54z" />
  </SvgIcon>
);

Checkmark.displayName = 'Checkmark';

export default Checkmark;
