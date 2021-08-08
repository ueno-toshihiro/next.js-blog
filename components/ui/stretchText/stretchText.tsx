import * as React from 'react';
import * as Styled from './stretchText.styled';

interface Props {
  style?: React.CSSProperties;
  maxWidth: number;
}

const StretchText: React.FC<Props> = (props) => {
  return (
    <Styled.Stretch {...props}>
      <Styled.Text>
        {props.children}
      </Styled.Text>
    </Styled.Stretch>
  )
};

export default StretchText;