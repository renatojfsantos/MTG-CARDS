import React from 'react'
import AppLoading from 'expo-app-loading'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import { ThemeProvider } from 'styled-components'

import {
  useFonts,
  Gupter_400Regular,
  Gupter_500Medium,
  Gupter_700Bold
} from '@expo-google-fonts/gupter'

import { NavigationContainer } from '@react-navigation/native'
import { AppRoutes } from '../src/router/routes'

import theme from './theme/index'
import { SignIn } from './screens/SignIn'

export default function App () {
  const [fontsLoaded] = useFonts({
    Gupter_400Regular,
    Gupter_500Medium,
    Gupter_700Bold
  })

  if (!fontsLoaded) {
    return <AppLoading />
  }

  return (
    <ThemeProvider theme={theme}>
      <SafeAreaProvider>
        <NavigationContainer>
          <AppRoutes />
        </NavigationContainer>
      </SafeAreaProvider>
    </ThemeProvider>
  )
}
