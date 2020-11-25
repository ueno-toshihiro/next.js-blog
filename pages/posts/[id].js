import Layout from '../../components/layout'
import { getAllPostIds, getPostData } from '../../lib/posts'

export default function Post({ postData }) {
  return (
    <Layout>
      {postData.title}
      <br/>
      {postData.id}
      <br/>
      {postData.date}
      <br/>
      <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
    </Layout>
  )
}

/**
 * この関数がファイル内に存在すると、Dynamic route が適用される
 * サーバー再度で生成するパスを配列で返すことで、サーバーで必要なページがレンダリングされ
 * 静的なページを生成する
 * @return {Promise<{paths: *, fallback: boolean}>}
 */
export async function getStaticPaths() {
  const paths = getAllPostIds()
  return {
    paths,
    fallback: false
  }
}

/**
 * この関数がファイル内に存在すると、サーバーで静的なページをリターンされたデータを元に
 * 生成する。引数に入る params は getStaticPaths から取得した個々のパス情報になる
 * @param params {object} { params: { id: 'xxx' } }
 * @return {Promise<{props: {postData: {[p: string]: any, id: *}}}>}
 */
export async function getStaticProps({ params }) {
  const postData = await getPostData(params.id)
  return {
    props: {
      postData
    }
  }
}
