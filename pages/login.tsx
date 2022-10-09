import { getProviders } from 'next-auth/react'
import React from 'react'
import { Login, LoginProps } from 'views/Login/Login'

const LoginPage = ({ providers }: LoginProps) => <Login providers={providers} />

export async function getServerSideProps() {
  const providers = await getProviders()
  return {
    props: { providers },
  }
}

export default LoginPage