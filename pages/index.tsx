import { Button } from "@mui/material"
import { useSession, signIn, signOut } from "next-auth/react"

export default function Component() {
  const { data: session } = useSession()

  return (
    <>
      <Button onClick={() => session ? signOut() : signIn()}>
        {session ? 'Sign out' : 'Sign in'}
      </Button>
    </>
  )
}