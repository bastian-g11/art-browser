import { AppProps } from 'next/app';
import Head from 'next/head';
import useApolloClient from 'hooks/useApolloClient';
import { ApolloProvider } from '@apollo/client';
import 'styles/globals.css';
import { UserProvider } from 'providers/UserProvider';
import { RouteGuard } from 'components';

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
          <RouteGuard>
            <Component {...pageProps} />
          </RouteGuard>
        </UserProvider>
      </ApolloProvider>
    </>
  );
};

export default MyApp;
