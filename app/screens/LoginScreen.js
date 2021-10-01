import React, { useState } from 'react';
import { Image, StyleSheet } from 'react-native';

import AppButton from '../components/AppButton';
import AppTextInput from '../components/AppTextInput';
import Screen from '../components/Screen';

function LoginScreen(props) {

    const [email, setEmail] = useState();
    const [password, setPassword] = useState();

    return (
        <Screen style={styles.container}>
            <Image style={styles.logo} source={require('../assets/logo-red.png')} />
            <AppTextInput
                autoCapitalize='none'
                autoCorrect={false}
                icon='email'
                keyboardType='email-address'
                onChangeText={text => setEmail(text)}
                placeholder='Email'
            />
            <AppTextInput
                autoCapitalize='none'
                autoCorrect={false}
                icon='lock'
                onChangeText={text => setPassword(text)}
                placeholder='Password'
                secureTextEntry
            />
            <AppButton
                buttonColor='primary'
                onPress={() => console.log(email + '\n' + password)}
                title='register'
            />
        </Screen>

    );
}

const styles = StyleSheet.create({
    container: {
        padding: 10,
    },
    logo: {
        marginTop: 50,
        width: 80,
        height: 80,
        marginBottom: 20,
        alignSelf: 'center',
    },
});

export default LoginScreen;