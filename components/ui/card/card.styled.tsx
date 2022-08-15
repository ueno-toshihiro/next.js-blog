import styled from 'styled-components';

interface Props extends React.HTMLAttributes<HTMLElement> {
  coverImage: string | undefined;
}

export const Card = styled.figure`
  background-color: ${(props) => props.theme.colors.white};
  border-radius: 0.25rem;
  box-shadow: 0 0.125rem 0.625rem 0 rgba(0, 0, 0, 0.06);
  display: inline-block;
  margin: 16px;
  overflow: hidden;
  transition-duration: 250ms;
  transition-property: box-shadow;
  width: 100%;

  &:focus,
  &:focus-within,
  &:hover {
    border-radius: 0.25rem;
    box-shadow: 0 0.25rem 1rem 0 rgba(0, 0, 0, 0.25);
  }

  &:focus-within {
    outline: auto 5px -webkit-focus-ring-color;
  }

  *:focus {
    outline: none;
  }
`;

export const CardStyled = styled(Card)`
  display: ${(props: Props) => (!props.coverImage ? 'flex' : 'initial')};

  a {
    display: ${(props: Props) => (!props.coverImage ? 'flex' : 'initial')};
    flex: ${(props: Props) => (!props.coverImage ? 1 : 'none')};
  }

  figcaption {
    display: ${(props: Props) => (!props.coverImage ? 'flex' : 'block')};
    flex: ${(props: Props) => (!props.coverImage ? 1 : 'none')};
    height: ${(props: Props) => (!props.coverImage ? '100%' : 'auto')};
    padding-top: ${(props: Props) =>
      !props.coverImage ? `${100 / 1.45}%` : '1.25rem'};

    address {
      justify-content: ${(props: Props) =>
        !props.coverImage ? 'flex-end' : 'initial'};
    }
  }
`;

export const CaptionWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`;

export const Media = styled.div<{ aspectRatio: number; image?: string }>`
  background-size: cover;
  background-image: ${(props) =>
    props.image ? `url("${props.image}")` : 'none'};
  background-color: ${(props) => props.theme.colors.white};
  background-position: 50% 20%;
  background-repeat: no-repeat;
  padding-top: ${(props) => 100 / props.aspectRatio}%;
  width: 100%;
`;
