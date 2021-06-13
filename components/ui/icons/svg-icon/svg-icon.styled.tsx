import styled, { keyframes } from 'styled-components';

interface SpinProps {
  spinDirection: 'normal' | 'reverse';
}

const spin = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`;

export const Svg = styled('svg')<SpinProps>`
  display: inline-block;
  height: auto;
  transition-duration: 300ms;
  transition-property: fill, opacity;
  user-select: none;

  &.spin {
    animation: ${spin} 2s linear infinite
      ${({ spinDirection }) => spinDirection};
  }

  &[disabled] {
    cursor: not-allowed;
    opacity: 0.2;
  }
`;
