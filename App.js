import React from 'react';

import { View } from 'react-native';

import AppButton from './app/components/AppButton';
import AppCard from './app/components/AppCard';
import ListingDetailsScreen from './app/screens/ListingDetailsScreen';
import colors from './app/config/colors';
import ViewImageScreen from './app/screens/ViewImageScreen';
import WelcomeScreen from './app/screens/WelcomeScreen';
import MessagesScreen from './app/screens/MessagesScreen';

export default function App() {

  return (
    <MessagesScreen />
  );
}