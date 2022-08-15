import styled from 'styled-components';

export const Container = styled.div`
  /* background-color: ${(props) => props.theme.background.secondary.main};
  color: ${(props) => props.theme.background.secondary.contrast}; */
  flex: 1;
`;

export const Grid = styled.div`
  display: grid;

  @media (min-width: 0px) and (max-width: 660px) {
    grid-template-columns: repeat(1, 1fr);
  }

  @media (min-width: 660px) and (max-width: 960px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (min-width: 960px) and (max-width: 1440px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media (min-width: 1440px) and (max-width: 2048px) {
    grid-template-columns: repeat(4, 1fr);
  }

  @media (min-width: 2048px) {
    grid-template-columns: repeat(5, 1fr);
  }
`;
