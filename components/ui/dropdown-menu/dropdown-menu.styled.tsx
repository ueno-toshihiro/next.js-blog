import Button from '../button';
import styled from 'styled-components';
import { lighten } from 'polished';

export const Toggle = styled.div`
  cursor: pointer;
  padding: 0;
`;

export const Arrow = styled.div`
  height: 10px;
  position: absolute;
  display: block;
  opacity: 0;
  width: 10px;

  &.isOpen {
    opacity: 1;
  }

  &::before,
  &::after {
    position: absolute;
    display: block;
    content: '';
    border-color: transparent;
    border-style: solid;
  }

  &::before {
    top: 0;
    border-bottom-color: ${(props) => props.theme.colors.secondary};
  }
`;

export const Popper = styled.div<{ width?: number | string }>`
  min-width: ${(props) => props.width || '270px'};
  z-index: 2;

  &[data-placement^='bottom'] {
    padding-top: 10px;

    > ${Arrow} {
      top: 0;

      &::before,
      &::after {
        border-width: 0 10px 10px;
      }
    }
  }

  ul {
    border: 1px solid ${(props) => props.theme.colors.secondary};
  }

  ul > li.selected {
    background: unset;
  }

  ul > li.highlighted {
    background: ${(props): string => lighten(0.4, props.theme.colors.secondary)};
    color: ${(props) => props.theme.palette.text.main};
  }
`;

export const IconButton = styled(Button)<{ height?: number; width?: number }>`
  align-items: center;
  display: flex;
  min-width: ${(props) => (props.width ? `${props.width}px` : '180px')};
  padding: ${(props) =>
    props.height ? `0 ${(props.height - 30) / 2 + 10}px` : '0 10px'};
  position: relative;
  text-align: left;
  height: ${(props) => props.height || '30'}px;

  span {
    flex: 1;
    padding-left: 2px;
  }
`;

export const DisabledIconButton = styled(Button)`
  align-items: center;
  display: flex;
  min-width: 180px;
  padding: 10px;
  position: relative;
  text-align: left;
  height: 30px;
  border-color: ${(props) => props.theme.palette.text.hint};
  color: ${(props) => props.theme.palette.text.hint};
  cursor: default;

  span {
    flex: 1;
    padding: 0 10px;
  }
`;

export const IconContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: ${(props) => props.theme.header.button.background};
`;

export const Icon = styled.div`
  cursor: pointer;
  height: 34px;
  width: 34px;
`;

export const IconLabel = styled.div`
  cursor: pointer;
  font-size: 0.75rem;
  white-space: nowrap;
`;
