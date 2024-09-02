import { GoogleAnalytics } from '@next/third-parties/google';
import '@styles/globals.css';
import type { AppProps } from 'next/app';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Component {...pageProps} />
      <GoogleAnalytics gaId='G-MZLJ5DSN5R' />
    </>
  );
}

export default MyApp;
