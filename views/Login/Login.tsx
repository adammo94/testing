import {
  Button, Typography,
} from '@mui/material';
import {
  collection, getDocs, query, where,
} from 'firebase/firestore';
import { AppProviders } from 'next-auth/providers';
import {
  signIn, useSession,
} from 'next-auth/react';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getUserData } from 'store/slices/user';
import Image from 'next/image';

import {
  Card, Wrapper,
} from './Login.styles';
import { db } from '../../firebase/config';

export type LoginProps = {
  providers: AppProviders;
}

export function Login({ providers }: LoginProps) {
  const { data: session } = useSession();
  const router = useRouter();
  const dispatch = useDispatch<any>();

  const handleSession = async () => {
    const q = query(collection(db, 'users'), where('email', '==', session?.user?.email));
    const docs = await getDocs(q);

    if (docs.docs.length === 0) {
      router.push('/signup/finalize');
    } else {
      await dispatch(getUserData(session?.user?.email as string));
      router.push('/');
    }
  };

  useEffect(() => {
    if (session) {
      handleSession();
    }
  }, [session]);

  return (
    <Wrapper>
      <Card>
        <Image
          src="/images/undraw_pic_profile_re_1865.svg"
          alt="man"
          width="100px"
          height="100px"
        />
        <Typography
          variant="h5"
        >
          Sign in with:
        </Typography>
        {Object.values(providers).map(provider => (
          <Button
            size="large"
            variant="contained"
            key={provider.name}
            onClick={() => signIn(provider.id)}
          >
            {provider.name}
          </Button>
        ))}
      </Card>
    </Wrapper>
  );
}

