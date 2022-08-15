import styled from 'styled-components';

export const Heading = styled.h2`
  margin: 0;
  padding: 1rem 2rem 0;
`;

export const TitleContainer = styled.div`
  height: 60%;
  margin-bottom: 1rem;
  overflow: hidden;
`;

export const Title = styled.h3`
  color: ${({ theme }) => theme.colors.primary};
  display: -webkit-box;
  font-size: 1rem;
  line-height: 1.2rem;
  margin: 0;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
`;

export const GridContainer = styled.ul`
  padding-left: 1rem;
  padding-Right: 1rem;
`;

export const Item = styled.li`
  display: flex;
`;

export const CardCaption = styled.div`
  display: flex;
  flex-direction: column;
  height: 44%;
  justify-content: space-between;
  padding: 1rem;
  width: 100%;
`;

export const DateContainer = styled.div`
  color: ${({ theme }) => theme.palette.text.main};
  font-size: 0.5rem;
`;

export const PageId = styled.div`
  color: ${({ theme }) => theme.palette.text.main};
  font-size: 0.5rem;
`;
