import React from 'react'
import { ScrollView, Alert } from 'react-native'
import { useForm } from 'react-hook-form'

import { Button } from '../../components/Button'
import { InputForm } from '../../components/InputForm'

import {
  Container,
  KeyboardAvoidingContainer,
  Form,
  ContainerImage,
  Image,
  BoxForgotPassword,
  TextForgotPassword,
  Footer,
  TextQuestion,
  TextCreateAccount
} from './styles'

interface FormData {
  email: string
  password: string
}

const QUESTION_ACCOUNT = 'Ainda não tem uma conta?'
const CREATE_ACCOUNT = 'Cadastre-se!'
const FORGOT_PASSWORD = 'Esqueceu a senha? 🔒'

export const SignIn = () => {
  const { control, handleSubmit } = useForm()

  function handleRegister (form: any) {
    if (!form.email) {
      return Alert.alert('Digite um email válido!')
    }

    if (!form.password) {
      return Alert.alert('Digite uma senha válida!')
    }

    const data: FormData = {
      email: form.email,
      password: form.password
    }

    console.log(data)
  }

  return (
    <Container>
      <KeyboardAvoidingContainer>
        <ScrollView style={{ width: '100%' }}>

          <Form>
            <ContainerImage>
              <Image/>
            </ContainerImage>

            <InputForm
              name='email'
              control={control}
              placeholder="Digite seu email"
              autoCapitalize='none'
              autoCorrect={false}
              keyboardType='email-address'
              textContentType='emailAddress'
              autoCompleteType='email'
              returnKeyType='next'
            />

            <InputForm
              name='password'
              control={control}
              placeholder="Digite sua senha"
              autoCapitalize='none'
              autoCorrect={false}
              keyboardType='email-address'
              textContentType='password'
              autoCompleteType='password'
              returnKeyType='send'
            />

            <BoxForgotPassword>
              <TextForgotPassword onPress={() => {}}>
                {FORGOT_PASSWORD}
              </TextForgotPassword>
            </BoxForgotPassword>

            <Button
              title="Entrar"
              onPress={handleSubmit(handleRegister)}
            />
          </Form>

          <Footer>
            <TextQuestion>{QUESTION_ACCOUNT}</TextQuestion>
            <TextCreateAccount onPress={() => {}}>
              {CREATE_ACCOUNT}
            </TextCreateAccount>
          </Footer>

        </ScrollView>
      </KeyboardAvoidingContainer>
    </Container>
  )
}
