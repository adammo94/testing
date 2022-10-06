import { getProviders } from 'next-auth/react'
import React from 'react'
import { LoginPage } from 'views/LoginPage'
import { LoginProps } from 'views/LoginPage/LoginPage'

function Login({ providers }: LoginProps) {
  return (
    <LoginPage providers={ providers }/>
  )
}

export async function getServerSideProps() {
  const providers = await getProviders()
  return {
    props: { providers },
  }
}

export default Login