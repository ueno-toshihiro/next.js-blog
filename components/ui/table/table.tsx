import * as React from 'react';
import * as Styled from './table.styled';
import Body from './body';

interface Props {
  items: { [key: string]: string }[];
}

const Table: React.FC<Props> = ({
  items,
}) => {

  return (
    <Styled.Table>
      <thead>
        <tr>
          <Styled.Th style={{ width: '6rem' }}>2000/01/23</Styled.Th>
          <Styled.Th>Dummy Dummy</Styled.Th>
          <Styled.Th>Dummy Dummy</Styled.Th>
          <Styled.Th>Dummy Dummy</Styled.Th>
          <Styled.Th>Dummy Dummy</Styled.Th>
          <Styled.Th style={{ width: '1%' }}>Dummy Dummy</Styled.Th>
        </tr>
      </thead>
      <tbody>
        {items && items.map((item, i) => {
          return (
            <Body
              key={i}
              item={item}
            />
          );
        })}
      </tbody>
    </Styled.Table>
  );
};

Table.displayName = 'Table';

export default Table;
