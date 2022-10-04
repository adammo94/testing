import { Button } from '@mui/material';
import {
  signIn, signOut, useSession,
} from 'next-auth/react';

export default function Component() {
  const { data: session } = useSession();

  return (
    <Button onClick={() => (session ? signOut() : signIn())}>
      bacaa
      {session ? 'Sign out' : 'Sign in'}
    </Button>
  );
}
