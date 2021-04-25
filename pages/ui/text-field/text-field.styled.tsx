import styled from 'styled-components';

export const Input = styled.input<{ error?: string, width?: number | string }>`
  background-color: ${(props) => props.error ? 'red' : 'white'};
  border-color: #0f9ada;
  border-radius: 4px;
  border-style: solid;
  border-width: 1px;
  font-size: 1rem;
  margin: 0;
  padding: 0.62rem 1rem;
  width: ${(props) => props.width};
  
  &::placeholder {
    color: #cccccc;
  }
`;
