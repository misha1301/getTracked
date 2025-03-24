import React, { PropsWithChildren } from 'react';
import { Center } from '@chakra-ui/react';
import LoginForm from '../components/form/LoginForm';
type TLoginProps = PropsWithChildren;

function Login({ children }: TLoginProps) {
  return (
    <Center h='100%'>
      <LoginForm />
    </Center>
  );
}

export default Login;
