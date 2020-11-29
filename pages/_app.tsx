import { AppProps } from 'next/app';
import '../styles/global.scss';

export default function App({ Component, pageProps }: AppProps) {
  console.log({ pageProps });
  return <Component {...pageProps} />;
}

// パフォーマンス測定
export function reportWebVitals(metric) {
  console.log(`${metric.name}::`, metric);
  // google analytics
  // https://nextjs.org/docs/advanced-features/measuring-performance#sending-results-to-analytics
}
