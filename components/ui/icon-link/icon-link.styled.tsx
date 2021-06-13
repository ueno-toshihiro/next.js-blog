import styled from 'styled-components';

export const Anchor = styled.a`
  line-height: 0;
  color: inherit;
  &:hover,
  &:visited {
    color: inherit;
  }
  &.disabled {
    cursor: not-allowed;
    opacity: 0.5;
  }
`;

export const Label = styled.span`
  line-height: normal;
`;
