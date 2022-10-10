import { getProviders } from 'next-auth/react';
import React from 'react';
import {
  Login, LoginProps,
} from 'views/Login/Login';

function LoginPage({ providers }: LoginProps) {
  return <Login providers={providers} />;
}

export async function getServerSideProps() {
  const providers = await getProviders();

  return {
    props: { providers },
  };
}

export default LoginPage;
