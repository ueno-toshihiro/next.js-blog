import Head from 'next/head';
import Layout, { siteTitle } from '@/components/layout/layout';
import { getSortedPostsData } from '../lib/posts';
import React from 'react';
import Section from '@/components/ui/section';
import BlogItems from '@/components/blog-items';

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
