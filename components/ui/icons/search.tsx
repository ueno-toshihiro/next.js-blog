import * as React from 'react';
import SvgIcon, { Props } from './svg-icon/svg-icon';
const Search: React.FC<Props> = (props) => (
  <SvgIcon viewBox="0 0 36 36" {...props}>
    <g
      strokeWidth="1.5"
      fillRule="evenodd"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M17.118 8.829c4.58 0 8.29 3.711 8.29 8.29 0 4.579-3.71 8.289-8.29 8.289a8.29 8.29 0 010-16.579zM28.724 28.724l-5.748-5.748" />
    </g>
  </SvgIcon>
);
Search.displayName = 'Search';
export default Search;
