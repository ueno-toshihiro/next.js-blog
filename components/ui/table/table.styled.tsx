import styled from 'styled-components';

export const TableWrapper = styled.div`
  max-height: 300px;
  overflow-y: auto;
`;

export const Table = styled.table`
  background-color: #ffffff;
  border-collapse: collapse;
  font-size: 1rem;
  width: 100%;
`;

export const Th = styled.th`
  background-color: #ffffff;
  border-bottom: 1px solid #cccccc;
  color: #000000;
  font-size: 0.875rem;
  font-weight: 500;
  padding-bottom: 0.625rem;
  position: sticky;
  text-align: left;
  top: 0;
  word-break: keep-all;
  z-index: 10;

  ::before {
    border-bottom: 1px solid #cccccc;
    content: '';
    height: 100%;
    left: -1px;
    position: absolute;
    top: 1px;
    width: 100%;
  }
`;
