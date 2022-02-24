import styled from 'styled-components/native'
import { Platform } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

export const Container = styled(SafeAreaView)`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.background};
`

export const KeyboardAvoidingContainer = styled.KeyboardAvoidingView.attrs({
  behavior: Platform.OS === 'ios' ? 'padding' : 'height'
})`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.background};
`

export const Form = styled.View`
  padding: 20px;
`

export const ContainerImage = styled.View`
  align-items: center;
  margin-bottom: 40px;
`

export const Image = styled.View`
  width: 200px;
  height: 200px;
  margin: 0px 0px 40px;
  background-color: ${({ theme }) => theme.colors.shape};
`

export const BoxForgotPassword = styled.View`
  margin: 20px 0;
  padding-bottom: 20px;
  padding-bottom: ${Platform.OS === 'ios' ? 40 : 20}px;
  align-items: flex-end;
`

export const TextForgotPassword = styled.Text`
  font-family: ${({ theme }) => theme.fonts.regular};
  font-size: ${({ theme }) => theme.size.medium_16};
  color: ${({ theme }) => theme.colors.shape};
`

export const Footer = styled.View`
  height: 28px;
  margin-top: ${Platform.OS === 'ios' ? 60 : 40}px;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`

export const TextQuestion = styled.Text`
  font-family: ${({ theme }) => theme.fonts.regular};
  font-size: ${({ theme }) => theme.size.medium_16};
  color: ${({ theme }) => theme.colors.title};
  padding-right: 8px;
`

export const TextCreateAccount = styled.Text`
  font-family: ${({ theme }) => theme.fonts.regular};
  font-size: ${({ theme }) => theme.size.medium_16};
  color: ${({ theme }) => theme.colors.red};
`
