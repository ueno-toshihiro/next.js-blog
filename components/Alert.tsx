/* eslint-disable react/prop-types */
import React from 'react';
import styled from 'styled-components';

const Success = styled.div`
  color: green;
`;
const Error = styled.div`
  color: red;
`;

type AlertPropsType = {
  children: React.ReactNode;
  type: 'success' | 'error';
};

const ResElement: React.FC<AlertPropsType> = ({ children, type }) => {
  if (type === 'success') {
    return <Success>{children}</Success>;
  }

  return <Error>{children}</Error>;
};

export default function Alert({ children, type }: AlertPropsType): JSX.Element {
  return <ResElement type={type}>{children}</ResElement>;
}
