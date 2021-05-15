import styled from 'styled-components';

const Cell = (props: { 'data-type': string }) => {
  switch (props['data-type']) {
    case 'thumbnail':
      return `
        height: 59px;
        width: 106px;
        > img {
          height: 48px;
          vertical-align: middle
          width: 96px;
        }
      `;
    case 'text':
      return `
        overflow: hidden;
        text-overflow: ellipsis;
        max-width: 0;
      `;
    case 'title':
      return `
        color: #ffffff;
        overflow: hidden;
        text-overflow: ellipsis;
        max-width: 0;
      `;
    case 'button':
      return `
        width: 1%;
      `;
  }
};

export const Td = styled.td`
  color: #000000;
  border-bottom: 1px solid #cccccc;
  padding: 5px;
  white-space: nowrap;
  ${(props) => Cell(props as any)};
`;

export const Tr = styled.tr`
  cursor: pointer;
  &:hover {
    background-color: #fff000;
    a {
      opacity: 1;
    }
  }
`;
