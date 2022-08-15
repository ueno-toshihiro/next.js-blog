import * as React from 'react';
import * as Styled from './blog-items.styled';
import Card from '@/components/ui/card';
import Grid from '@/components/ui/grid/grid';
import Link from 'next/link';
import { useRouter } from 'next/router';

type Props = {
  allPostsData: {
    coverImagePath?: string;
    date: string;
    title: string;
    id: string;
  }[];
}

const BlogItems: React.FC<Props> = ({ allPostsData }) => {
  const router = useRouter();
  console.log({ router });

  return (
    <>
      <Styled.Heading>BLOG</Styled.Heading>
      <Styled.GridContainer>
        <Grid>
          {allPostsData.map(({ id, date, title, coverImagePath }) => (
            <Styled.Item key={id}>
              <Card blogId={id} coverImage={coverImagePath || '/images/no-image.png'} title={'No image'}>
                <Styled.CardCaption>
                  <Styled.TitleContainer>
                    <Styled.Title>{title}</Styled.Title>
                  </Styled.TitleContainer>
                  <div>
                    <Styled.DateContainer>更新日時: {date}</Styled.DateContainer>
                    <Styled.PageId>blog id: {id}</Styled.PageId>
                  </div>
                </Styled.CardCaption>
              </Card>
            </Styled.Item>
          ))}
        </Grid>
      </Styled.GridContainer>
    </>
  );
}

BlogItems.displayName = 'BlogItems';

export default BlogItems;
