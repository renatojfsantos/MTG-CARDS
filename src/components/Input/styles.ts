import styled from 'styled-components/native';
import { TextInput } from 'react-native';

export const Container = styled(TextInput)`
  width: 100%;
  padding: 16px;

  font-family: ${({ theme }) => theme.fonts.medium};
  font-size: ${({ theme }) => theme.size.medium_16};

  color: ${({ theme }) => theme.colors.tex_dark};
  background-color: ${({ theme }) => theme.colors.shape};

  border-radius: 8px;
  margin-bottom: 16px;
`;