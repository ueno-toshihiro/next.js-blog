import 'react-phone-number-input/style.css';
import styled from 'styled-components';
import PhoneInput from 'react-phone-number-input';

export const Phone = styled(PhoneInput)<{ error?: string; width?: number | string }>`
  background-color: ${(props) => (props.error ? 'red' : 'white')};
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

  > input {
    border: none;
    font-size: 1rem;
    outline: none;
  }
`;
