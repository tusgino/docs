import { GoogleAnalytics } from '@next/third-parties/google';
import '@styles/globals.css';
import type { AppProps } from 'next/app';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getClaps } from '../store/claps/slice';
import { wrapper } from '../store/store';

function MyApp({ Component, ...rest }: AppProps) {
  const { props } = wrapper.useWrappedStore(rest);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getClaps([]));
  }, [dispatch]);

  return (
    <>
      <Component {...props.pageProps} />
      <GoogleAnalytics gaId='G-MZLJ5DSN5R' />
    </>
  );
}

export default wrapper.withRedux(MyApp);
