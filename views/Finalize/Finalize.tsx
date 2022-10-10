import React from 'react';
import {
  SubmitHandler, useForm,
} from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import {
  addDoc, collection,
} from 'firebase/firestore';
import { useRouter } from 'next/router';
import {
  Button, TextField,
} from '@mui/material';
import { useSession } from 'next-auth/react';

import { Wrapper } from './Finalize.styles';
import { db } from '../../firebase/config';

type Inputs = {
  name: string;
  lastname: string;
  age: string;
  country: string;
};

export function Finalize() {
  const router = useRouter();
  const { data: session } = useSession();

  const schema = yup.object().shape({
    age: yup.string().required('Wiek jest wymagany')
      .test('name', 'Wiek musi być większy niż 18', val => parseInt(val as string, 10) >= 18),
    country: yup.string().required('Państwo jest wymagane'),
    lastname: yup.string().required('Nazwisko jest wymagane'),
    name: yup.string().required('Imie jest wymagane'),
  });

  const {
    register, handleSubmit, formState: { errors },
  } = useForm<Inputs>({
    resolver: yupResolver(schema),
  });

  const onSubmit: SubmitHandler<Inputs> = async data => {
    await addDoc(collection(db, 'users'), {
      age: parseInt(data.age, 10),
      country: data.country,
      email: session?.user?.email,
      lastname: data.lastname,
      name: data.name,
      signUpDate: Date.now(),
    });
    router.push('/');
  };

  return (
    <Wrapper onSubmit={handleSubmit(onSubmit)}>
      <TextField
        error={!!errors.name?.message}
        helperText={errors.name?.message}
        type="text"
        variant="filled"
        label="name"
        {...register('name')}
      />
      <TextField
        error={!!errors.lastname?.message}
        helperText={errors.lastname?.message}
        type="text"
        variant="filled"
        label="lastname"
        {...register('lastname')}
      />
      <TextField
        error={!!errors.age?.message}
        helperText={errors.age?.message}
        type="number"
        variant="filled"
        label="age"
        {...register('age')}
      />
      <TextField
        error={!!errors.country?.message}
        helperText={errors.country?.message}
        type="text"
        variant="filled"
        label="country"
        {...register('country')}
      />
      <Button
        type="submit"
        variant="contained"
      >
        Register
      </Button>
    </Wrapper>
  );
}
