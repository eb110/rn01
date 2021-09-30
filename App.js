import React, { useState } from 'react';

import AppPicker from './app/components/AppPicker';
import AppTextInput from './app/components/AppTextInput';
import Screen from './app/components/Screen';

const categories = [
  {
    id: 1,
    label: 'Books',
    value: 2,
  },
  {
    id: 2,
    label: 'Bikes',
    value: 200,
  },
  {
    id: 3,
    label: 'CD\'s',
    value: 10,
  },
  {
    id: 4,
    label: 'MC\'s',
    value: 15,
  },
]

export default function App() {
  return (
    <Screen>
      <AppPicker icon='apps' placeholder='Category' items={categories} />
      <AppTextInput icon='email' placeholder='Email' />
    </Screen>
  );
}