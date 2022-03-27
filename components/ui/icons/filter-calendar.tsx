import * as React from 'react';
import SvgIcon, { Props } from './svg-icon/svg-icon';
const FilterCalendar: React.FC<Props> = (props) => (
  <SvgIcon viewBox="0 0 36 36" {...props}>
    <g
      strokeWidth="1.5"
      fillRule="evenodd"
      strokeLinecap="round"
      strokeLinejoin="round"
      transform="translate(9, 8)"
    >
      <g>
        <path
          d="M9.25789474,18.9473684 L2.10526316,18.9473684 C0.942558421,18.9473684 0,18.00481 0,16.8421053 L0,4.21052632 C0,3.04782158 0.942558421,2.10526316 2.10526316,2.10526316 L14.7368421,2.10526316 C15.8995468,2.10526316 16.8421053,3.04782158 16.8421053,4.21052632 L16.8421053,11.4210526"
          strokeWidth="1.3"
        />
        <line
          x1="12.6315789"
          y1="0"
          x2="12.6315789"
          y2="4.21052632"
          strokeWidth="1.3"
        />
        <line
          x1="4.21052632"
          y1="0"
          x2="4.21052632"
          y2="4.21052632"
          strokeWidth="1.3"
        />
        <line
          x1="0"
          y1="8.42105263"
          x2="16.8421053"
          y2="8.42105263"
          strokeWidth="1.3"
        />
        <g transform="translate(12, 14)">
          <polygon points="0.0012 0.0006 3.2002 4.2036 3.2002 7.1116 4.8012 7.9986 4.8012 4.2036 8.0002 0.0006" />
          <polygon
            strokeWidth="0.5"
            points="8 0 0 0 3.2 4.205 3.2 7.111 4.8 8 4.8 4.205"
          />
        </g>
      </g>
    </g>
  </SvgIcon>
);
FilterCalendar.displayName = 'FilterCalendar';
export default FilterCalendar;
