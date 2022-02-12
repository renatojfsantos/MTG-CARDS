import styled from 'styled-components/native'
import { AntDesign } from '@expo/vector-icons'

export const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.background};
`

export const Title = styled.Text`
  font-family: ${({ theme }) => theme.fonts.bold};
  font-size: ${({ theme }) => theme.size.large_24};
  color: ${({ theme }) => theme.colors.green};
`

export const SubTitle = styled.Text`
  font-family: ${({ theme }) => theme.fonts.medium};
  font-size: ${({ theme }) => theme.size.medium_16};
  color: ${({ theme }) => theme.colors.red};
`

export const Icon = styled(AntDesign)`
  color: ${({ theme }) => theme.colors.blue};
  font-size: ${({ theme }) => theme.size.large_24};
`
