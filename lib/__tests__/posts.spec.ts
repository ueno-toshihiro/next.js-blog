import { getAllPostIds } from '../posts';

describe('posts.ts Functions Test', () => {
  it('should return file names', () => {
    const result = getAllPostIds();
    const expected = [
      { params: { id: 'pre-rendering' } },
      { params: { id: 'ssg-ssr' } }
    ];

    expect(result).toEqual(expected);
  });
});
