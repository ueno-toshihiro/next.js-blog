import React from "react";
import styled, { StyledComponent } from 'styled-components';

const Success: StyledComponent<"div", any, {}, never> = styled.div`
  color: green;
`
const Error: StyledComponent<"div", any, {}, never> = styled.div`
  color: red;
`

const ResElement = ({children, type}): JSX.Element => {
  if (type === 'success') {
    return <Success>{children}</Success>
  }

  return <Error>{children}</Error>
}

type AlertPropsType = {
  children: React.ReactNode;
  type: 'success' | 'error';
};

export default function Alert({ children, type }: AlertPropsType): JSX.Element {
  return <ResElement type={type}>{children}</ResElement>
}
