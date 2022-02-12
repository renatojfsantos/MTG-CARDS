import styled from 'styled-components/native'
import { SafeAreaView } from 'react-native-safe-area-context'

export const Container = styled(SafeAreaView).attrs({
  edges: ['top', 'bottom']
})`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.background};
  align-items: center;
`

export const TitleGreeting = styled.Text`
  font-family: ${({ theme }) => theme.fonts.bold};
  font-size: ${({ theme }) => theme.size.extra_40};
  color: ${({ theme }) => theme.colors.title};
  text-align: center;
`

export const SubTitleGreeting = styled.Text`
  font-family: ${({ theme }) => theme.fonts.medium};
  font-size: ${({ theme }) => theme.size.large_24};
  color: ${({ theme }) => theme.colors.text};
  text-align: center;
`

export const ContainerImage = styled.View`
  width: 200px;
  height: 200px;
  margin: 20px 0px 40px;
  background-color: ${({ theme }) => theme.colors.shape};
`

export const Form = styled.View`
  flex: 1;
  width: 100%;
  padding: 24px;
  justify-content: space-between;
`

export const Fields = styled.View`
  align-items: flex-end;
`

export const TextForgotPassword = styled.Text`
  font-family: ${({ theme }) => theme.fonts.regular};
  font-size: ${({ theme }) => theme.size.medium_16};
  color: ${({ theme }) => theme.colors.shape};
`

export const ContainerSeparator = styled.View`
  flex-direction: row;
  margin-top: 8px;
`

export const SeparatorLeft = styled.View`
  flex: 1;
  height: 1px;
  right: 20px;
  align-self: center;
  background-color: ${({ theme }) => theme.colors.text};
`

export const TextSeparator = styled.Text`
  font-family: ${({ theme }) => theme.fonts.medium};
  font-size: ${({ theme }) => theme.size.medium_16};
  color: ${({ theme }) => theme.colors.title};
  align-self: center;
`

export const SeparatorRight = styled.View`
  flex: 1;
  height: 1px;
  left: 20px;
  align-self: center;
  background-color: ${({ theme }) => theme.colors.text};
`

export const WrapperSocialButton = styled.View`
  flex-direction: row;
`

export const ButtonSocial = styled.TouchableOpacity`
  margin: 20px 24px 40px;
  width: 52px;
  height: 52px;
  align-items: center;
  justify-content: center;
  border-radius: 8px;
  background-color: ${({ theme }) => theme.colors.shape};
`

export const TextButtonSocial = styled.Text``

export const Footer = styled.View`
  height: 28px;
  margin-bottom: 16px;
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
