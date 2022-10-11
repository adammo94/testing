import { Button } from '@mui/material';
import {
  useSession,
} from 'next-auth/react';
import { useRouter } from 'next/router';

export default function Component() {
  const { data: session } = useSession();
  const router = useRouter();

  if (session) {
    return <> </>;
  }

  return (
    <Button
      variant="contained"
      onClick={() => (router.push('/login'))}
    >
      Sign in
    </Button>
  );
}
