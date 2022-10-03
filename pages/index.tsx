import { Button } from "@mui/material"
import { useSession, signIn, signOut } from "next-auth/react"
import { useRouter } from 'next/router'

export default function Component() {
  const { data: session } = useSession()
  const router = useRouter()
  return (
    <>
      <Button onClick={() => session ? signOut() : router.push('/login')}>
        {session ? 'Sign out' : 'Sign in'}
      </Button>
      <button onClick={() => router.push('/login')}>login</button>
    </>
  )
}