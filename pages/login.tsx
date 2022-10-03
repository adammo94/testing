import { Button } from "@mui/material"
import { collection, getDocs, query, where } from "firebase/firestore"
import { AppProviders } from "next-auth/providers"
import { getProviders, signIn, signOut, useSession } from "next-auth/react"
import { useRouter } from 'next/router'
import { useEffect } from "react"
import { db } from "../firebase/config"

type LoginProps = {
  providers: AppProviders
}

export default function SignIn({ providers }: LoginProps) {
  const { data: session } = useSession()
  const router = useRouter()

  const handleSession = async () => {
    const q = query(collection(db, "users"), where("email", "==", session?.user?.email));
    const docs = await getDocs(q);
    if (docs.docs.length === 0) {
      router.push('/signup/finalize')
    } else {
      router.push('/')
    }
  }

  useEffect(() => {
    if (session) {
      handleSession()
    }
  }, [session])

  return (
    <>
      {Object.values(providers).map((provider) => (
        <Button
          key={provider.name}
          onClick={() => signIn(provider.id)}
        >
          Sign in with {provider.name}
        </Button>
      ))}
      <Button onClick={() => signOut()}>sign out</Button>
    </>
  )
}

export async function getServerSideProps() {
  const providers = await getProviders()
  return {
    props: { providers },
  }
}