import {
  createAsyncThunk, createSlice,
} from '@reduxjs/toolkit';
import {
  collection, getDocs, query, where,
} from '@firebase/firestore';
import { differenceInDays } from 'date-fns';

import { db } from '../../firebase/config';

const errorMessage = 'Error loading data';

export const getUserData = createAsyncThunk<UserType<number>, string>(
  'user/getUserData',
  async (email: string) => {
    const q = query(collection(db, 'users'), where('email', '==', email));
    const docs = await getDocs(q);
    const data = docs.docs[0].data() as UserType<number>;

    return data;
  }
);

type InitialStateType = {
  user: UserType<string> | null;
  errors: {
    user: string | null;
  };
  loading: {
    user: boolean;
  };
}

type UserType<T> = {
  age: string;
  country: string;
  email: string;
  lastname: string;
  name: string;
  signUpDate: T;
}

const initialState: InitialStateType = {
  errors: {
    user: null,
  },
  loading: {
    user: true,
  },
  user: null,
};

const handleSignUpDateDiff = (days: number) => {
  if (days < 1) {
    return 'less than one day';
  }

  if (days < 31) {
    return `${days} ${days === 1 ? 'day' : 'days'}`;
  }

  if (days < 365) {
    const months = Math.floor(days / 30);

    return `${months} ${months === 1 ? 'month' : 'months'}`;
  }
  const years = Math.floor(days / 365);

  return `${years} ${years === 1 ? 'year' : 'years'}`;
};

export const userSlice = createSlice({
  extraReducers: builder => {
    builder
      .addCase(getUserData.fulfilled, (state, action) => {
        const dateInDays = differenceInDays(Date.now(), action.payload.signUpDate);

        state.user = ({
          ...action.payload,
          signUpDate: handleSignUpDateDiff(dateInDays),
        });
        state.loading.user = false;
      })
      .addCase(getUserData.pending, state => {
        state.loading.user = true;
        state.errors.user = null;
      })
      .addCase(getUserData.rejected, state => {
        state.loading.user = false;
        state.errors.user = errorMessage;
      });
  },
  initialState,
  name: 'user',
  reducers: {},
});

export default userSlice.reducer;
