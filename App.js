import React, { useState } from 'react';

import AppPicker from './app/components/AppPicker';
import AppTextInput from './app/components/AppTextInput';
import Screen from './app/components/Screen';
import ListingEditScreen from './app/screens/ListingEditScreen';
import LoginScreen from './app/screens/LoginScreen';
import RegisterScreen from './app/screens/RegisterScreen';
import MessagesScreen from './app/screens/MessagesScreen';

export default function App() {

  return (
    <MessagesScreen />
  );
}