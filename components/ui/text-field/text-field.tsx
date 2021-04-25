import * as React from 'react';
import * as Styled from './text-field.styled';

export interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
  error?: string;
}

export const Input = React.forwardRef<HTMLInputElement, Props>((props, ref) => (
  <Styled.Input {...props} ref={ref} />
));

export default Input;