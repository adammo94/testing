import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { useState } from 'react';
import {
  collection,
  deleteDoc, doc, getDocs, query, where,
} from 'firebase/firestore';
import {
  signOut, useSession,
} from 'next-auth/react';

import { db } from '../../firebase/config';

export function Profile() {
  const [
    open,
    setOpen,
  ] = useState(false);

  const { data: session } = useSession();

  const handleDeleteAccount = async () => {
    const q = query(collection(db, 'users'), where('email', '==', session?.user?.email));
    const docs = await getDocs(q);

    await deleteDoc(doc(db, 'users', docs.docs[0].id));
    setOpen(false);
    signOut();
  };

  return (
    <div>
      <Button
        variant="contained"
        onClick={() => setOpen(true)}
        color="error"
      >
        Delete account
      </Button>
      <Dialog
        open={open}
        onClose={() => setOpen(false)}
      >
        <DialogTitle>
          Delete account?
        </DialogTitle>
        <DialogContent>
          <DialogContentText>
            Are you sure you want to delete your account?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button
            onClick={() => setOpen(false)}
            variant="contained"
          >
            Cancel

          </Button>
          <Button
            onClick={handleDeleteAccount}
          >
            Confirm
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
