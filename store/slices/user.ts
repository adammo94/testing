import {
  createAsyncThunk, createSlice,
} from '@reduxjs/toolkit';
import {
  collection, getDocs, query, where,
} from '@firebase/firestore';
import {
  differenceInDays, differenceInMonths, differenceInYears,
} from 'date-fns';
import { AppState } from 'store/store';

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

const handleSignUpDateDiff = (timestamp: number) => {
  const days = differenceInDays(Date.now(), timestamp);
  const months = differenceInMonths(Date.now(), timestamp);
  const years = differenceInYears(Date.now(), timestamp);

  if (years) {
    return `${years} ${years === 1 ? 'year' : 'years'}`;
  }

  if (months) {
    return `${months} ${months === 1 ? 'month' : 'months'}`;
  }

  if (days) {
    return `${days} ${days === 1 ? 'day' : 'days'}`;
  }

  return 'less than one day';
};

export const userSlice = createSlice({
  extraReducers: builder => {
    builder
      .addCase(getUserData.fulfilled, (state, action) => {
        state.user = ({
          ...action.payload,
          signUpDate: handleSignUpDateDiff(action.payload.signUpDate),
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

export const userSelector = (state: AppState) => state.user?.user;

export default userSlice.reducer;
