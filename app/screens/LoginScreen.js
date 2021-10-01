import React from 'react';
import { Formik } from 'formik';
import * as yup from 'yup';
import { Image, StyleSheet } from 'react-native';

import AppButton from '../components/AppButton';
import AppTextInput from '../components/AppTextInput';
import AppErrorMessage from '../components/AppErrorMessage';
import Screen from '../components/Screen';

const validationSchema = yup.object().shape({
    email: yup.string().required().email().label('Email'),
    password: yup.string().required().min(4).label('Password')
});
function LoginScreen(props) {
    return (
        <Screen style={styles.container}>
            <Image style={styles.logo} source={require('../assets/logo-red.png')} />
            <Formik
                initialValues={{ email: '', password: '' }}
                onSubmit={values => console.log(values)}
                validationSchema={validationSchema}
            >
                {({ handleChange, handleSubmit, errors }) => (
                    <>
                        <AppTextInput
                            autoCapitalize='none'
                            autoCorrect={false}
                            icon='email'
                            keyboardType='email-address'
                            onChangeText={handleChange('email')}
                            placeholder='Email'
                        />
                        <AppErrorMessage>{errors.email}</AppErrorMessage>
                        <AppTextInput
                            autoCapitalize='none'
                            autoCorrect={false}
                            icon='lock'
                            onChangeText={handleChange('password')}
                            placeholder='Password'
                            secureTextEntry
                        />
                        <AppErrorMessage>{errors.password}</AppErrorMessage>
                        <AppButton
                            buttonColor='primary'
                            onPress={handleSubmit}
                            title='login'
                        />
                    </>
                )}
            </Formik>
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