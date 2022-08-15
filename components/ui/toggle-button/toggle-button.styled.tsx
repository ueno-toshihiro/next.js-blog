import styled from 'styled-components';

export const ToggleContainer = styled.div<{
  rightMargin: string;
  checked: boolean;
  compact: boolean;
}>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  > div {
    display: flex;
    align-items: center;
    margin-right: ${(props): string => props.rightMargin && props.rightMargin};
  }
  > span {
    margin-right: ${(props): string => props.rightMargin && props.rightMargin};
  }
  ${(props): string => (props.compact ? 'flex-direction: column;' : '')}
`;

export const Description = styled.span<{
  compact: boolean;
}>`
  font-size: 1rem;
  ${(props): string => (props.compact ? 'font-size: 0.875rem;' : '')}
  color: ${(props): string =>
    props.compact ? props.theme.palette.text.main : 'inherit'};
  margin-bottom: 2px;
  white-space: nowrap;
`;

export const ToggleBlock = styled.div`
  line-height: 26px;
`;

export const ToggleWrapper = styled.label`
  position: relative;
  &&& {
    margin: 0 10px 0 10px;
  }

  .react-toggle {
    display: flex;
    align-items: center;
  }

  .react-toggle-track {
    width: 44px;
    height: 24px;
    background-color: #b3b3b3;
    border-radius: 12px;
  }

  .react-toggle-screenreader-only {
    display: none;
  }

  .react-toggle--checked .react-toggle-track {
    background-color: ${(props): string => props.theme.colors.secondary};
  }

  .react-toggle:hover:not(.react-toggle--disabled) .react-toggle-track {
    background-color: ${(props): string => props.theme.colors.grey.main};
  }

  .react-toggle--checked:hover:not(.react-toggle--disabled)
    .react-toggle-track {
    background-color: ${(props): string => props.theme.colors.secondary};
  }

  .react-toggle-thumb {
    top: 2px;
    left: 2px;
    width: 20px;
    height: 20px;
    position: absolute;
    background-color: #ffffff;
    border-radius: 10px;
  }

  .react-toggle--checked .react-toggle-thumb {
    left: 22px;
  }
`;

export const OffText = styled.span`
  font-size: 20px;
  color: ${(props): string => props.theme.palette.text.main};
  width: 100px;
  text-align: right;
`;

export const OnText = styled.span<{ checked: boolean }>`
  font-size: 20px;
  color: ${(props): string =>
    props.checked
      ? props.theme.colors.secondary
      : props.theme.palette.text.main};
  width: 100px;
`;
