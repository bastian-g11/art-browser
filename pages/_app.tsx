import { AppProps } from 'next/app';
import Head from 'next/head';
import useApolloClient from 'hooks/useApolloClient';
import { ApolloProvider } from '@apollo/client';
import 'styles/globals.css';
import '@fortawesome/fontawesome-svg-core/styles.css';
import { config } from '@fortawesome/fontawesome-svg-core';
import { UserProvider } from 'providers/UserProvider';

config.autoAddCss = false;

const MyApp = ({ Component, pageProps: { ...pageProps } }: AppProps) => {
  const { client } = useApolloClient();
  return (
    <>
      <Head>
        <title>Page Name</title>
        <meta name='description' content='content' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <ApolloProvider client={client}>
        <UserProvider>
          <Component {...pageProps} />
        </UserProvider>
      </ApolloProvider>
    </>
  );
};

export default MyApp;
