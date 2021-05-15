import * as React from 'react';
import Table from './table';
import * as Styled from './table.styled';

const TableContainer: React.FC = () => {
  const items = [
    { date: '2021/01/01'},
    { date: '2021/01/02'},
    { date: '2021/01/03'},
    { date: '2021/01/04'},
    { date: '2021/01/05'},
  ];

  return (
    <Styled.TableWrapper>
      <Table items={items} />
    </Styled.TableWrapper>
  );
};

export default TableContainer;
