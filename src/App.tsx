import React from 'react';
import AppLoading from 'expo-app-loading';
import { ThemeProvider } from 'styled-components';

import {
  useFonts,
  Gupter_400Regular,
  Gupter_500Medium,
  Gupter_700Bold,
} from '@expo-google-fonts/gupter';

import theme from './theme/index';
import { Home } from './screens/Home';

export default function App() {

  const [fontsLoaded] = useFonts({
    Gupter_400Regular,
    Gupter_500Medium,
    Gupter_700Bold,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return(
    <ThemeProvider theme={theme}>
      <Home />
    </ThemeProvider>
  );
}