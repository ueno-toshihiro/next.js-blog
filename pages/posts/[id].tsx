import * as React from 'react';
import Layout from '@/components/layout/layout';
import { getAllPostIds, getPostData } from '../../lib/posts';
import { GetStaticProps, GetStaticPaths } from 'next';

type PostPropsType = {
  postData: {
    id: string;
    title: string;
    date: string;
    contentHtml: string;
  };
};

export default function Post({ postData }: PostPropsType): JSX.Element {
  return (
    <Layout>
      <section>
        {postData.title}
        <br />
        {postData.id}
        <br />
        {postData.date}
        <br />
        <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
      </section>
    </Layout>
  );
}

/**
 * この関数がファイル内に存在すると、Dynamic route が適用される
 * サーバーサイドで生成するパスを配列で返すことで、サーバーで必要なページがレンダリングされ
 * 静的なページを生成する
 * @return {Promise<{paths: *, fallback: boolean}>}
 */
export const getStaticPaths: GetStaticPaths = async () => {
  const paths = getAllPostIds();
  /**
   * Dynamic route [id].tsx
   * 下記2つのパスに対応している
   * /posts/ssg-ssr
   * /posts/pre-rendering
   */
  return {
    paths,
    fallback: false,
  };
};

/**
 * この関数がファイル内に存在すると、サーバーで静的なページをリターンされたデータを元に
 * 生成する。引数に入る params は getStaticPaths から取得した個々のパス情報になる
 * @param params {object} { params: { id: 'xxx' } }
 * @return {Promise<{props: {postData: {[p: string]: any, id: *}}}>}
 */
export const getStaticProps: GetStaticProps = async ({ params }) => {
  console.log({ params });
  const postData = await getPostData(params.id as string);
  return {
    props: {
      postData,
    },
  };
};
