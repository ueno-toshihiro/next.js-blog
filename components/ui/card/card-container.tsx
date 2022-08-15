import * as React from 'react';
import Card from './card';

export interface CardProps extends React.HTMLAttributes<HTMLElement> {
  coverImage?: string;
  blogId: string;
  title?: string;
  children: React.ReactNode;
}

const CaptureCardContainer: React.FC<CardProps> = ({
  coverImage,
  blogId,
  title,
  children,
  ...props
}) => {
  return (
    <Card {...props} blogId={blogId} coverImage={coverImage} title={title}>
      {children}
    </Card>
  );
};

CaptureCardContainer.displayName = 'CaptureCardContainer';

export default CaptureCardContainer;
