import { Button } from '@mui/material';
import {
  signOut, useSession,
} from 'next-auth/react';
import { useRouter } from 'next/router';

export default function Component() {
  const { data: session } = useSession();
  const router = useRouter();

  return (
    <Button
      variant="contained"
      onClick={() => (session ? signOut() : router.push('/login'))}
    >
      {session ? 'Sign out' : 'Sign in'}
    </Button>
  );
}
