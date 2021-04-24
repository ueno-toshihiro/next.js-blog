import * as React from 'react';
import * as Styled from './button.styled';

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  type?: 'button' | 'submit' | 'reset';
}

const Button: React.FC<Props> = ({ children, type = 'button', ...props }) => {
  return (
    <Styled.Button type={type} {...props}>
      {children}
    </Styled.Button>
  );
};

export default Button;
