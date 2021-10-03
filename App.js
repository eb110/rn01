import React, { useEffect, useState } from 'react';
import * as ImagePicker from 'expo-image-picker';

import AppPicker from './app/components/AppPicker';
import AppTextInput from './app/components/AppTextInput';
import Screen from './app/components/Screen';
import ListingEditScreen from './app/screens/ListingEditScreen';
import LoginScreen from './app/screens/LoginScreen';
import RegisterScreen from './app/screens/RegisterScreen';
import MessagesScreen from './app/screens/MessagesScreen';
import { Button, Image, StyleSheet } from 'react-native';
import ImageInput from './app/components/ImageInput';

export default function App() {

  const requestPermission = async () => {
    const { granted } = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (!granted)
      alert('dawaj pozwolenie albo spadaj');
  };

  const [imageUri, setImageUri] = useState('')

  const selectImage = async () => {
    try {
      const result = await ImagePicker.launchImageLibraryAsync();
      if (!result.cancelled) {
        setImageUri(result.uri);

      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    requestPermission();
  }, [])

  return (
    <Screen>
      <Button title='Select Image' onPress={selectImage} />
      <ImageInput imageUri={imageUri} />
    </Screen>
  );
}

const styles = StyleSheet.create({
  image: {
    width: 80,
    height: 80,
  },
});