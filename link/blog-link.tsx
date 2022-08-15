import * as React from 'react';
import Link, { LinkProps } from 'next/link';
import getBlogRouting from '../lib/get-blog-routing';

export interface Props extends Omit<LinkProps, 'as' | 'href'> {
  blogId: string;
  children?: React.ReactNode;
}

const BlogLink: React.FC<Props> = ({
  children,
  blogId,
  ...props
}) => {
  const { as, url } = getBlogRouting(blogId);

  return (
    <Link {...props} as={as} href={url} passHref>
      {children}
    </Link>
  );
};

BlogLink.displayName = 'BlogLink';

export default BlogLink;
