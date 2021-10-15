import '@assets/main.css'

import { FC } from 'react';
import { AppProps } from 'next/app';

const Noop: FC = ({ children }) => <>{children}</>

const App = (
  { Component, pageProps }: AppProps & { Component: { Layout: FC } }
) => {
  const Layout = Component.Layout ?? Noop

  return (
    <>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
};

export default App;