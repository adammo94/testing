import React from 'react';
import { Provider } from 'react-redux';
import { AppProps } from 'next/app';
import { Session } from 'next-auth';
import { SessionProvider } from 'next-auth/react';
import GlobalStyle from 'globalstyles/globalstyles';
import { Layout } from 'components/Layout';
import UserInitializer from 'components/UserInitializer/UserInitializer';
import ResponsiveAppBar from 'components/Navbar/Navbar';

import { wrapper } from '../store/store';

function MyApp({
  Component,
  pageProps: {
    session, ...rest
  },
}: AppProps<{ session: Session }>) {
  const { store } = wrapper.useWrappedStore(rest);

  return (
    <SessionProvider session={session}>
      <Provider store={store}>
        <UserInitializer />
        <GlobalStyle />
        <ResponsiveAppBar>
          <Layout>
            <Component {...rest} />
          </Layout>
        </ResponsiveAppBar>
      </Provider>
    </SessionProvider>
  );
}

export default MyApp;
