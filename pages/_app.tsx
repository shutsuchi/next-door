import '@assets/main.css';

import { FC } from 'react';
import { AppProps } from 'next/app';
import { UIProvider } from '@components/ui/context';

const Noop: FC = ({ children }) => <>{children}</>;

const App = ({
  Component,
  pageProps,
}: AppProps & { Component: { Layout: FC } }) => {
  const Layout = Component.Layout ?? Noop;

  return (
    <UIProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </UIProvider>
  );
};

export default App;
