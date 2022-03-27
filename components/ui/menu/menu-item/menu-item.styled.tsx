import styled from 'styled-components';
import { darken, lighten } from 'polished';

export const MenuItem = styled.li<{ noPadding?: boolean }>`
  display: flex;
  flex-direction: row;
  align-items: center;
  cursor: pointer;
  font-size: 1rem;
  padding: ${(props) => (props.noPadding ? '0' : '10px 20px')};
  color: ${(props) => props.theme.palette.text.main};
  border-bottom: 1px solid ${(props) => lighten(0.4, props.theme.colors.secondary)};

  &:hover {
    background-color: ${(props) => lighten(0.3, props.theme.colors.primary)};
  }

  &:first-child {
    margin-top: 7px;
  }

  &:last-child {
    border-bottom: none;
    margin-bottom: 8px;
  }

  &[disabled] {
    cursor: not-allowed;
    opacity: 0.5;
  }

  &.alert {
    color: ${(props) => props.theme.palette.text.danger};
  }

  &.selected {
    background: ${(props) => lighten(0.4, props.theme.colors.primary)};
  }
`;

export const IconWrapper = styled.div`
  display: flex;
  width: 35px;
  text-align: center;
  align-items: center;
  justify-content: center;
  margin-right: 10px;

  svg {
    vertical-align: top;
  }
`;
