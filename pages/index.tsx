import Head from 'next/head';
import Link from 'next/link';
import Layout, { siteTitle } from '@/components/layout';
import utilStyles from '../styles/utils.module.scss';
import { getSortedPostsData } from '../lib/posts';
import { useRouter } from 'next/router';
import styled from 'styled-components';
import React from 'react';

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
  const router = useRouter();
  const { pid } = router.query;
  console.log({ router });

  const routerHandler = (id: string): void => {
    // use Link test.
    router.push(`posts/${id}`);
  };

  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>

      {/* Markdown blog */}
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>BLOG</h2>
        <ul className={utilStyles.list}>
          {allPostsData.map(({ id, date, title }) => (
            <li className={utilStyles.listItem} key={id}>
              <Title>{title}</Title>
              <br />
              {id}
              <br />
              {date}
              <br />
              <Link href={`/posts/${id}`}>
                <a>{id}</a>
              </Link>
              <div className={utilStyles.linkDefault} onClick={() => routerHandler(id)}>
                Use Router Link: {id}
              </div>
            </li>
          ))}
        </ul>
        <p>{pid}</p>
      </section>

      {/* PDF Viewer */}
      <section>
        <Title>PDF Viewer</Title>
        <Link href={`/pdf`}>
          <a>PDF Viewer</a>
        </Link>
      </section>

      {/* UI Components */}
      <section>
        <Title>UI Components</Title>
        <Link href={`/ui`}>
          <a>UI Components</a>
        </Link>
      </section>
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
