import styled from 'styled-components';

export const IconButton = styled.button`
  background: ${(props) => props.theme.iconButton.background};
  border-radius: ${(props) => props.theme.iconButton.borderRadius};
  border: ${(props) =>
    `${props.theme.iconButton.borderWidth} ${props.theme.iconButton.borderStyle} ${props.theme.iconButton.borderColor}`};
  cursor: pointer;
  display: inline-flex;
  font-size: ${(props) => props.theme.iconButton.fontSize};
  margin: ${(props) => props.theme.iconButton.margin};
  padding: ${(props) => props.theme.iconButton.padding};

  &[disabled] {
    color: ${(props) => props.theme.palette.text.disabled};
    cursor: not-allowed;
  }
`;
