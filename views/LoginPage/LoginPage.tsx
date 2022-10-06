import { Button } from "@mui/material"
import { db } from "../../firebase/config"
import { collection, getDocs, query, where } from "firebase/firestore"
import { AppProviders } from "next-auth/providers"
import { getProviders, signIn, signOut, useSession } from "next-auth/react"
import { useRouter } from 'next/router'
import { useEffect } from "react"
import { Paragraf, Window, Wrapper } from "./LoginPage.styles"

export type LoginProps = {
  providers: AppProviders
}

export function LoginPage({ providers }: LoginProps) {
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
    <Wrapper>
      <Window>
        <Paragraf>Sign in with:</Paragraf>
        {Object.values(providers).map((provider) => (
          <Button
          size={"large"}
            variant="contained"
            key={provider.name}
            onClick={() => signIn(provider.id)}
          >
            {provider.name}
          </Button>
        ))}
      </Window>
    </Wrapper>
  )
}

