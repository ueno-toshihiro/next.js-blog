import Head from 'next/head';
import Link from 'next/link';
import Layout, { siteTitle } from '@/components/layout/layout';
import { getSortedPostsData } from '../lib/posts';
import styled from 'styled-components';
import React from 'react';
import Section from '@/components/ui/section';
import BlogItems from '@/components/blog-items';


const Title = styled.h2`
  font-size: 1.2rem;
  color: ${({ theme }) => theme.colors.primary};
`;

type HomePropsType = {
  allPostsData: {
    date: string;
    title: string;
    id: string;
  }[];
};

export default function Home({ allPostsData }: HomePropsType): JSX.Element {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>


      {/* Markdown blog */}
      <Section noPadding>
        <BlogItems allPostsData={allPostsData} />
      </Section>

      {/* PDF Viewer */}
      <Section>
        <Title>PDF Viewer</Title>
        <Link href={`/pdf`}>
          <a>PDF Viewer</a>
        </Link>
      </Section>

      {/* UI Components */}
      <Section>
        <Title>UI Components</Title>
        <Link href={`/ui`}>
          <a>UI Components</a>
        </Link>
      </Section>
    </Layout>
  );
}

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}
