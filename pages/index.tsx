import Head from 'next/head';
import Link from 'next/link';
import Amplify, { Auth, Hub } from 'aws-amplify';
import Layout, { siteTitle } from '@/components/layout';
import utilStyles from '../styles/utils.module.scss';
import { getSortedPostsData } from '../lib/posts';
import { useRouter } from 'next/router';
import styled from 'styled-components';
import React from 'react';

// NOTE: Cognitoでサインイン機能をつける
// https://dev.classmethod.jp/articles/react-cognito-signin/
Amplify.configure({
  Auth: {
    region: process.env.REGION,
    userPoolId: process.env.USER_POOL_ID,
    userPoolWebClientId: process.env.USER_POOL_WEB_CLIENT_ID,
    oauth: {
      domain: process.env.OAUTH_DOMAIN,
      scope: ['openid'],
      redirectSignIn: process.env.OAUTH_REDIRECT_SIGN_IN,
      redirectSignOut: process.env.OAUTH_REDIRECT_SIGN_OUT,
      responseType: 'code'
    }
  }
})

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

  const [user, setUser] = React.useState<any | null>(null);

  React.useEffect(() => {
    Hub.listen('auth', ({ payload: { event, data } }) => {
      switch (event) {
        case 'signIn':
        case 'cognitoHostedUI':
          getUser().then(userData => setUser(userData));
          break;
        case 'signOut':
          setUser(null);
          break;
        case 'signIn_failure':
        case 'cognitoHostedUI_failure':
          console.log('Sign in failure', data);
          break;
      }
    });

    getUser().then(userData => setUser(userData));
  }, []);

  const getUser = async () => {
    try {
      const userData = await Auth.currentAuthenticatedUser();
      // デバッグ用
      Auth.currentSession().then((data) => {
        console.log(`token: ${data.getIdToken().getJwtToken()}`);
      });
      console.log(userData);
      return userData;
    } catch (e) {
      return console.log('Not signed in');
    }
  }

  const routerHandler = (id: string): void => {
    // use Link test.
    router.push(`posts/${id}`);
  };

  return user ? (
    <Layout home>
      <div>
        <p>サインイン済み</p>
        <p>ユーザー名: {user.username}</p>
        <button onClick={() => Auth.signOut()}>Sign Out</button>
      </div>

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
  ) : (
    <div>
      <p>
        サインインする
      </p>
      <button onClick={() => Auth.federatedSignIn()}>Sign In</button>
    </div>
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
