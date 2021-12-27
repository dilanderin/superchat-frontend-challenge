import '../styles/globals.css';
import React from 'react';
import { wrapper } from '../store/store';
import DefaultLayout from '../layouts/DefaultLayout';
import type { AppProps } from 'next/app';

const MyApp = ({ Component, pageProps }: AppProps) => (
  <DefaultLayout>
    <Component {...pageProps} />
  </DefaultLayout>
);

export default wrapper.withRedux(MyApp);
