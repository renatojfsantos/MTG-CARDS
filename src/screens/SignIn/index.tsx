import React from 'react';
import { Button } from '../../components/Button';
import { Input } from '../../components/Input';

import {
  Container,
  TitleGreeting,
  SubTitleGreeting,
  ContainerImage,
  Form,
  Fields,
  TextForgotPassword,
  ContainerSeparator,
  SeparatorLeft,
  TextSeparator,
  SeparatorRight,
  WrapperSocialButton,
  ButtonSocial,
  TextButtonSocial,
  Footer,
  TextQuestion,
  TextCreateAccount,
} from './styles';

const GREETING = 'Bem Vindo!'
const WELCOME = 'Tenha acesso ao universo incrível de Magic The Gathering.'
const QUESTION_ACCOUNT = 'Ainda não tem uma conta?'
const CREATE_ACCOUNT = 'Cadastre-se!'
const OR_SIGN_IN_WITH = 'Fazer login com'
const FORGOT_PASSWORD = 'Esqueceu a senha? 🔒'

export const SignIn = () => {

  const handleCreateAccount = () => {
    console.log('Mudou');
  }

  return (
    <Container>
        {/* <TitleGreeting>{GREETING}</TitleGreeting> */}
        {/* <SubTitleGreeting>{WELCOME}</SubTitleGreeting> */}
      <ContainerImage/>
        
      <Form>
        <Fields>
          <Input
            placeholder="Digite seu email"
          />

          <Input
            placeholder="Digite sua senha"
          />

          <TextForgotPassword onPress={handleCreateAccount}>
            {FORGOT_PASSWORD}
          </TextForgotPassword>
        </Fields>
        <Button
          title="Entrar"
        />
      </Form>

        <ContainerSeparator>
            <SeparatorLeft/>
              <TextSeparator>{OR_SIGN_IN_WITH}</TextSeparator>
            <SeparatorRight />
        </ContainerSeparator>

        <WrapperSocialButton>
          <ButtonSocial>
            <TextButtonSocial>Google</TextButtonSocial>
          </ButtonSocial>

          <ButtonSocial>
            <TextButtonSocial>Apple</TextButtonSocial>
          </ButtonSocial>

          <ButtonSocial>
            <TextButtonSocial>Discord</TextButtonSocial>
          </ButtonSocial>
        </WrapperSocialButton>

      <Footer>
        <TextQuestion>{QUESTION_ACCOUNT}</TextQuestion>
        <TextCreateAccount onPress={handleCreateAccount}>
          {CREATE_ACCOUNT}
        </TextCreateAccount>
      </Footer>
    </Container>
  );
}