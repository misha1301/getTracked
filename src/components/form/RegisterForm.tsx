// import React from 'react';
// import { Tabs } from '@chakra-ui/react';
/** @jsxRuntime classic */
/** @jsx jsx */
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { jsx, css } from '@emotion/react';
import { Button, Input, Stack, Field, Text, InputProps, ButtonProps } from '@chakra-ui/react';
import { PasswordInput, PasswordInputProps } from '@/components/ui/password-input';
import BasicBlock from './BasicBlock';
import DividerLine from './DividerLine';

import { useTranslation } from 'react-i18next';
import GetTrackedLogo from '@/assets/GetTrackedLogo.tsx';

function RegisterForm() {
  const { t } = useTranslation();
  const navigate = useNavigate();

  return (
    <BasicBlock>
      <Stack gap='20px'>
        <GetTrackedLogo height='44px'/>
        <Text textStyle='2xl' fontWeight='bold'>
          {t('registerPage.registerForm.formLable')}
        </Text>
        <Stack gap='16px'>
          <Stack gap='8px'>
            <Field.Root>
              <Field.Label fontWeight='normal'>
                {t('registerPage.registerForm.emailFieldLable')}
              </Field.Label>
              <InputCustom type='email' onChange={() => console.log('click')} />
              <Field.ErrorText>This is an error text</Field.ErrorText>
            </Field.Root>
            <Field.Root>
              <Field.Label fontWeight='normal'>
                {t('registerPage.registerForm.passwordFieldLable')}
              </Field.Label>
              <InputPasswordCustom onChange={() => console.log('click')} />
              <Field.ErrorText>This is an error text</Field.ErrorText>
            </Field.Root>
            <Field.Root>
              <Field.Label fontWeight='normal'>
                {t('registerPage.registerForm.repeatPasswordFieldLable')}
              </Field.Label>
              <InputPasswordCustom onChange={() => console.log('click')} />
              <Field.ErrorText>This is an error text</Field.ErrorText>
            </Field.Root>
          </Stack>
          <Stack gap='23px'>
            <ButtonCustom>{t('registerPage.registerForm.submitButton')}</ButtonCustom>
            <DividerLine>
              <Text padding='0px 8px' color='#464646' textStyle='sm'>
                {t('registerPage.registerForm.dividerLable')}
              </Text>
            </DividerLine>
            <ButtonCustom variant='outline' onClick={() => navigate('/login')}>
              {t('registerPage.registerForm.goToButton')}
            </ButtonCustom>
          </Stack>
        </Stack>
      </Stack>
    </BasicBlock>
  );
}

export const InputCustom = React.forwardRef<HTMLInputElement, InputProps>(
  function InputCustom(props, ref) {
    return <Input ref={ref} size='lg' rounded='15px' variant='outline' {...props} />;
  },
);

export const InputPasswordCustom = React.forwardRef<HTMLInputElement, PasswordInputProps>(
  function InputPasswordCustom(props, ref) {
    return <PasswordInput ref={ref} size='lg' rounded='15px' variant='outline' {...props} />;
  },
);

export const ButtonCustom = React.forwardRef<HTMLButtonElement, ButtonProps>(
  function ButtonCustom(props, ref) {
    return <Button ref={ref} size='lg' rounded='15px' variant='surface' {...props} />;
  },
);

export default RegisterForm;
