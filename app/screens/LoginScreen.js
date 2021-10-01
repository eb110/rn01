import React from 'react';
import * as yup from 'yup';
import { Image, StyleSheet } from 'react-native';

import { AppForm, AppFormField, AppButtonSubmit } from '../components/Forms';
import Screen from '../components/Screen';

const validationSchema = yup.object().shape({
    email: yup.string().required().email().label('Email'),
    password: yup.string().required().min(4).label('Password')
});
function LoginScreen(props) {
    return (
        <Screen style={styles.container}>
            <Image style={styles.logo} source={require('../assets/logo-red.png')} />
            <AppForm
                initialValues={{ email: '', password: '' }}
                onSubmit={values => console.log(values)}
                validationSchema={validationSchema}
            >
                <AppFormField
                    name='email'
                    autoCapitalize='none'
                    autoCorrect={false}
                    icon='email'
                    keyboardType='email-address'
                    placeholder='Email'
                />
                <AppFormField
                    name='password'
                    autoCapitalize='none'
                    autoCorrect={false}
                    icon='lock'
                    placeholder='Password'
                    secureTextEntry
                />
                <AppButtonSubmit
                    buttonColor='primary'
                    title='login'
                />
            </AppForm>
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