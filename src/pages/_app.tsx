import '../styles/globals.css';
import type { AppProps } from 'next/app';
import RootLayout from '../app/layout';
import Head from 'next/head';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
    <RootLayout>
      <Component {...pageProps} />
    </RootLayout>
    </>
  );
}

export default MyApp;
