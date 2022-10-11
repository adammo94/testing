import { useSession } from 'next-auth/react';
import React, { useEffect } from 'react';
import {
  useDispatch, useSelector,
} from 'react-redux';
import {
  getUserData, userSelector,
} from 'store/slices/user';

export function UserInitializer() {
  const { data: session } = useSession();
  const dispatch = useDispatch<any>();
  const user = useSelector(userSelector);

  const sendUser = (email: string) => {
    dispatch(getUserData(email));
  };

  useEffect(() => {
    if (session && !user) {
      sendUser(session.user?.email as string);
    }
  }, [
    session,
    user,
  ]);

  return (

    <> </>

  );
}

