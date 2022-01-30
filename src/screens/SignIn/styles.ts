import styled from 'styled-components/native';
import { SafeAreaView } from 'react-native-safe-area-context'

export const Container = styled(SafeAreaView).attrs({
  edges: [ 'top', 'bottom' ],
})`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.background};
`;

export const TitleGreeting = styled.Text`
  font-family: ${({ theme }) => theme.fonts.bold};
  font-size: ${({ theme }) => theme.size.extra_40};
  color: ${({ theme }) => theme.colors.title};
  text-align: center;
`;

export const SubTitleGreeting = styled.Text`
  font-family: ${({ theme }) => theme.fonts.medium};
  font-size: ${({ theme }) => theme.size.large_24};
  color: ${({ theme }) => theme.colors.text};
  text-align: center;
`;

export const Form = styled.View`
  flex: 1;
  width: 100%;
  padding: 24px;
  justify-content: space-between;
`;

export const Fields = styled.View``;

export const Footer = styled.View`
  height: 28px;
  margin-bottom: 16px;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export const TextQuestion = styled.Text`
  font-family: ${({ theme }) => theme.fonts.regular};
  font-size: ${({ theme }) => theme.size.medium_16};
  color: ${({ theme }) => theme.colors.title};
  padding-right: 8px;
`;

export const TextCreateAccount = styled.Text`
  font-family: ${({ theme }) => theme.fonts.regular};
  font-size: ${({ theme }) => theme.size.medium_16};
  color: ${({ theme }) => theme.colors.title};
  text-decoration: underline;
`;