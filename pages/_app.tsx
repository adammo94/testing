import React from 'react';
import { Provider } from 'react-redux';
import { AppProps } from 'next/app';
import { Session } from 'next-auth';
import { SessionProvider } from 'next-auth/react';
import GlobalStyle from 'globalstyles/globalstyles';
import { UserInitializer } from 'components/UserInitializer';

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
        <Component {...rest} />
      </Provider>
    </SessionProvider>
  );
}

export default MyApp;
