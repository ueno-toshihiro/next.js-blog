import * as React from 'react';
import { AppProps } from 'next/app';
import '../styles/global.scss';
import theme from '@/components/theme';

import { createGlobalStyle, ThemeProvider } from 'styled-components';

// styled-components
const GlobalStyle = createGlobalStyle`
  body {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
  }
`;

export default function App({ Component, pageProps }: AppProps) {
  console.log({ pageProps });
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}

// パフォーマンス測定
export function reportWebVitals(metric) {
  console.log(`${metric.name}::`, metric);
  // google analytics
  // https://nextjs.org/docs/advanced-features/measuring-performance#sending-results-to-analytics
}
