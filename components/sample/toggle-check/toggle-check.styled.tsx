import styled from 'styled-components';

export const WrapperCheckbox = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 26px;
`;

export const ToggleBlock = styled.div`
  display: flex;
  line-height: 26px;
`;

export const ToggleWrapper = styled.label`
  position: relative;

  &&& {
    margin: 0 10px 0 10px;
  }

  .react-toggle {
    align-items: center;
    cursor: pointer;
    display: flex;
    position: relative;
  }

  .react-toggle-track {
    height: 24px;
    background-color: ${(props): string =>
      props.theme.colors.primary};
    border-radius: 12px;
    width: 44px;
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
    background-color: ${(props): string =>
      props.theme.colors.primary};
    border-radius: 10px;
  }

  .react-toggle--checked .react-toggle-thumb {
    left: 22px;
  }
`;

export const Label = styled.span``;

export const Text = styled.span`
  font-size: 1rem;
  color: ${(props): string => props.theme.colors.primary};
`;
