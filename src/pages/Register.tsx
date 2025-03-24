import RegisterForm from '@/components/form/RegisterForm';
import { Center } from '@chakra-ui/react';
import React, { PropsWithChildren } from 'react';

type TRegisterProps = PropsWithChildren;

function Register({ children }: TRegisterProps) {
  return (
    <Center h='100%'>
      <RegisterForm />
    </Center>
  );
}

export default Register;
