import * as React from 'react';
import * as Styled from './card.styled';
import { BlogLink } from '../../../link';

export interface Props {
  coverImage?: string;
  blogId: string;
  title?: string;
  children?: React.ReactNode
}

const Card: React.FC<Props> = ({
  coverImage,
  blogId,
  title,
  children,
  ...props
}) => (
  <Styled.CardStyled {...props} coverImage={coverImage}>
    <BlogLink blogId={blogId}>
      <a>
        {coverImage && (
          <Styled.Media aspectRatio={9/5} image={coverImage} title={title || 'No Name'} />
        )}
        {children}
      </a>
    </BlogLink>
  </Styled.CardStyled>
);

Card.displayName = 'Card';

export default Card;
