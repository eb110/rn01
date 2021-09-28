import React from 'react';

import { View } from 'react-native';

import AppButton from './app/components/AppButton';
import AppCard from './app/components/AppCard';
import ListingDetailsScreen from './app/components/ListingDetailsScreen';
import colors from './app/config/colors';
import ViewImageScreen from './app/screens/ViewImageScreen';
import WelcomeScreen from './app/screens/WelcomeScreen';

export default function App() {

  return (
    <ListingDetailsScreen />
  );
}