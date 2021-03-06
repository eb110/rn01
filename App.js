import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import AuthNavigator from './app/navigation/AuthNavigator';
import AppNavigator from './app/navigation/AppNavigator';
import navigationTheme from './app/navigation/navigationTheme';
import ListingsScreen from './app/screens/ListingsScreen';

export default function App() {

  return (
    <NavigationContainer theme={navigationTheme}>
      <AppNavigator />
    </NavigationContainer>
  );

}