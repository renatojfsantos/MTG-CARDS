import React from 'react'
import { Platform } from 'react-native'
import { Feather } from '@expo/vector-icons'
import { useTheme } from 'styled-components'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

import { Home } from '../screens/Home'
import { LibraryCard } from '../screens/LibraryCard'
import { CounterPoint } from '../screens/CounterPoint'

const { Navigator, Screen } = createBottomTabNavigator()

export function AppRoutes () {
  const theme = useTheme()
  return (
    <Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: theme.colors.background_button,
        tabBarInactiveTintColor: theme.colors.text,
        tabBarLabelPosition: 'beside-icon',
        tabBarStyle: {
          height: Platform.OS === 'ios' ? 88 : 60,
          paddingVertical: Platform.OS === 'ios' ? 20 : 0
        }
      }}
    >
      <Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({ color, size }) =>
            <Feather
              name="home"
              size={size}
              color={color}
            />
        }}
      />
      <Screen
        name="Listagem"
        component={LibraryCard}
        options={{
          tabBarIcon: ({ color, size }) =>
            <Feather
              name="list"
              size={size}
              color={color}
            />
        }}
      />
      <Screen
        name="Contador"
        component={CounterPoint}
        options={{
          tabBarIcon: ({ color, size }) =>
            <Feather
              name="grid"
              size={size}
              color={color}
            />
        }}
      />
    </Navigator>
  )
}
