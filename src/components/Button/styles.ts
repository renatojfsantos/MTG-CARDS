import styled from 'styled-components/native'
import { TouchableOpacity } from 'react-native'

export const Container = styled(TouchableOpacity)`
  width: 100%;
  padding: 16px;
  align-items: center;
  border-radius: 8px;
  background-color: ${({ theme }) => theme.colors.background_button};
`

export const Title = styled.Text`
  font-family: ${({ theme }) => theme.fonts.bold};
  font-size: ${({ theme }) => theme.size.large_20};
  color: ${({ theme }) => theme.colors.shape};
`
