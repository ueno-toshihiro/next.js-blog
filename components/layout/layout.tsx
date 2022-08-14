import * as React from 'react';
import * as Styled from './layout.styled';
import Head from 'next/head';
import Link from 'next/link';
import utilStyles from '../../styles/utils.module.scss';
import Amplify, { Auth, Hub } from 'aws-amplify';

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

export const siteTitle = 'UENO';

type LayoutPopsType = {
  children: React.ReactNode;
  home?: boolean;
};

export default function Layout({ children, home }: LayoutPopsType): JSX.Element {
  const [user, setUser] = React.useState<any | null>(null);
  console.log({ user })

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

  const LoginElm = React.useMemo(() => {
    return user ? (
      <Styled.LoginElmContainer>
        <Styled.UserName>{user.username}</Styled.UserName>
        <Styled.LoginButton onClick={() => Auth.signOut()}>Sign Out</Styled.LoginButton>
      </Styled.LoginElmContainer>
    ) : (
      <Styled.LoginElmContainer>
        <Styled.UserName>サインインする</Styled.UserName>
        <Styled.LoginButton onClick={() => Auth.federatedSignIn()}>Sign In</Styled.LoginButton>
      </Styled.LoginElmContainer>
    );
  }, [user]);

  return (
    <Styled.LayoutContainer>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta name="description" content="Learn how to build a personal website using Next.js" />
        <meta
          property="og:image"
          content={`https://og-image.now.sh/${encodeURI(
            siteTitle,
          )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
        />
        <meta name="og:title" content={siteTitle} />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <header>
        {home ? (
          <Styled.Header>
            <Styled.HeadHomeImage src="/images/logo.png" alt="UENO" />
            {LoginElm}
          </Styled.Header>
        ) : (
          <Styled.Header>
            <Link href="/">
              <a>
                <Styled.HeadImage src="/images/logo.png" alt="UENO" />
              </a>
            </Link>
            <h2 className={utilStyles.headingLg}>
              <Link href="/">
                <a className={utilStyles.colorInherit}>TOP PAGE</a>
              </Link>
            </h2>
            {LoginElm}
          </Styled.Header>
        )}
      </header>
      <main>{children}</main>
      {!home && (
        <footer>
          <Styled.FooterContent>
            <Link href="/">
              <Styled.BackButton>
                <Styled.Triangle />
                <Styled.ButtonText>Back</Styled.ButtonText>
              </Styled.BackButton>
            </Link>
          </Styled.FooterContent>
        </footer>
      )}
    </Styled.LayoutContainer>
  );
}
