import React from 'react';

import { View } from 'react-native';

import AppButton from './app/components/AppButton';
import AppCard from './app/components/AppCard';
import colors from './app/config/colors';
import ViewImageScreen from './app/screens/ViewImageScreen';
import WelcomeScreen from './app/screens/WelcomeScreen';

export default function App() {

  return (
    <View style={{ backgroundColor: colors.mediumGrey, flex: 1, padding: 20, paddingTop: 100 }}>
      <AppCard
        title='Red red wine'
        subTitle='UB 40'
        image={require('./app/assets/UB40.jpeg')}
      />
    </View>
  );
}