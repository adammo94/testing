import { Button } from "@mui/material"
import { AppProviders } from "next-auth/providers"
import { getProviders, signIn, useSession } from "next-auth/react"

import { useRouter } from 'next/router'

type LoginProps = {
  providers: AppProviders
}

export default function SignIn({ providers }: LoginProps) {
  const { data: session } = useSession()
  const router = useRouter()

  return (
    <>
      {Object.values(providers).map((provider) => (
        <Button
          key={provider.name}
          onClick={() => signIn(provider.id, {
            callbackUrl: "http://localhost:3000/"
          })}
        >
          Sign in with {provider.name}
        </Button>
      ))}
    </>
  )
}

export async function getServerSideProps() {
  const providers = await getProviders()
  return {
    props: { providers },
  }
}