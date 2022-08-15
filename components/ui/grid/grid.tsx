import * as React from 'react';
import * as Styled from './grid.styled';

export interface Props extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

const Grid: React.FC<Props> = ({ children, ...props }) => {
  return (
    <Styled.Container {...props}>
      <Styled.Grid>{children}</Styled.Grid>
    </Styled.Container>
  );
};

Grid.displayName = 'Grid';

export default Grid;
