import styled from 'styled-components';

export const Stretch = styled.div<{ maxWidth: number }>`
  align-items: center;
  background-color: ${(props) => props.theme.colors.primary};
  border: 2px solid white;
  border-radius: 16px;
  box-shadow: 0px 2px 8px 0px rgba(0, 0, 0, 0.2);
  cursor: pointer;
  display: flex;
  max-width: 160px;
  padding: 0 8px;
  transform: translateX(-50%) translateY(-57px);
  transition-duration: 300ms;
  transition-property: max-width;
  transition-timing-function: ease-in-out;

  &::after {
    background-color: ${(props) => props.theme.colors.primary};
    content: '';
    width: 7px;
    height: 27px;
    border-left: 2px solid white;
    border-right: 2px solid white;
    border-bottom: 2px solid white;
    box-shadow: 0px 2px 8px 0px rgba(0, 0, 0, 0.2);
    position: absolute;
    left: 50%;
    bottom: 0;
    transform: translateX(-50%) translateY(100%);
  }

  &:hover {
    max-width: ${(props) => props.maxWidth}px;
  }
`;

export const Text = styled.div`
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;
