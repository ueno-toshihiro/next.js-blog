import { UrlObject } from 'url';

export default function getBlogRouting(
  blogId: string,
): { as?: string; url: UrlObject } {
  return {
    as: `/posts/${blogId}`,
    url: {
      pathname: '/posts/[blogId]',
    },
  };
}
