import styled from "styled-components";
import { lighten } from 'polished';

export const Container = styled.div`
  background: ${(props) => lighten(0.5, props.theme.colors.secondary)};
`;

export const Title = styled.h2`
  color: ${(props) => props.theme.palette.text.main};
  font-size: 1.2rem;
  margin: 0 0 1rem;
`;

export const Content = styled.article`
  margin-bottom: 1rem;
`;

export const Description = styled.p`
  color: ${(props) => props.theme.palette.text.main};
  font-size: 0.8rem;
  margin: 0;
  padding: 0;
`;

export const LinkContainer = styled.div`
  align-items: center;
  background: ${(props) => lighten(0.5, props.theme.colors.secondary)};
  display: flex;
  a {
    align-items: center;
    color: ${(props) => props.theme.colors.primary};
    display: flex;
    font-size: 1rem;
    font-weight: bold;
    &::before {
      content: '';
      border-left: 8px solid ${(props) => props.theme.colors.primary};
      border-top: 4px solid transparent;
      border-bottom: 4px solid transparent;
      display: inline-block;
      height: 1px;
      width: 5px;
    }
    :hover {
      text-decoration: underline;
    }
  }
`;
