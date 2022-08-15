import styled from 'styled-components';

const sectionNoPadding = `
  padding-left: 0;
  padding-right: 0;
`;

export const Section = styled.section<{ noPadding: boolean }>`
  ${(props) => props.noPadding && sectionNoPadding}
`;