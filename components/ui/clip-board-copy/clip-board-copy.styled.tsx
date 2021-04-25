import styled, { keyframes } from 'styled-components';
import { darken, lighten } from 'polished';

export const Wrapper = styled.div`
  display: flex;
  input {
    margin-Right: 0.5rem;
  }
`;

const SlideInOut = keyframes`
  0% { 
    opacity: 0;
  }
  10% { 
    opacity: 1; 
  }
  75% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
`;

export const Copied = styled.div`
  align-items: center;
  animation: ${SlideInOut} 2s linear;
  background: ${lighten(0.4, '#000000')};
  border-radius: 6px;
  color: #ffffff;
  display: flex;
  font-size: 1rem;
  justify-content: center;
  white-space: nowrap;
  padding: 0.5rem 2rem;
  position: absolute;
  top: -60%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 10;
`;

export const CopiedWrapper = styled.div`
  position: relative;
`;
