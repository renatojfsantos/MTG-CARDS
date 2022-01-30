import React from 'react';
import { Button } from '../../components/Button';
import { Input } from '../../components/Input';

import {
  Container,
  TitleGreeting,
  SubTitleGreeting,
  Form,
  Fields,
  Footer,
  TextQuestion,
  TextCreateAccount
} from './styles';

const GREETING = 'Bem Vindo!'
const WELCOME = 'Tenha acesso ao universo incrível de Magic The Gathering.'
const QUESTION_ACCOUNT = 'Ainda não tem uma conta?'
const CREATE_ACCOUNT = 'Cadastre-se!'

export const SignIn = () => {

  const handleCreateAccount = () => {
    console.log('Mudou');
  }

  return (
    <Container>
      <TitleGreeting>{GREETING}</TitleGreeting>
      <SubTitleGreeting>{WELCOME}</SubTitleGreeting>

      <Form>
        <Fields>
          <Input
            placeholder="Digite seu email"
          />

          <Input
            placeholder="Digite sua senha"
          />
        </Fields>

        <Button
          title="Entrar"
        />
      </Form>

      <Footer>
        <TextQuestion>{QUESTION_ACCOUNT}</TextQuestion>
        <TextCreateAccount 
          onPress={handleCreateAccount}
        >
          {CREATE_ACCOUNT}
        </TextCreateAccount>
      </Footer>
    </Container>
  );
}