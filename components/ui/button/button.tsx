import * as React from 'react';
import * as Styled from './button.styled';

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  status?: boolean;
  type?: 'button' | 'submit' | 'reset';
}

const Button: React.FC<Props> = ({ children, status = true, type = 'button', ...props }) => {
  return (
    <Styled.Button type={type} status={status} {...props}>
      {children}
    </Styled.Button>
  );
};

export default Button;
