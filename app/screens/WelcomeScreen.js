import React from 'react';
import { StyleSheet, View, Image, ImageBackground } from 'react-native';

import AppText from '../components/AppText';
import AppButton from '../components/AppButton';

function WelcomeScreen(props) {
    return (

        <ImageBackground
            blurRadius={1}
            style={styles.background}
            source={require('../assets/background.jpg')}
        >
            <View style={styles.logoContainer}>
                <Image
                    source={require('../assets/logo-red.png')}
                    style={styles.logo}
                />
                <AppText textSize={24} >Sell what you don't need</AppText>
            </View>
            <View style={styles.buttonsContainer}>
                <AppButton title='login' />
                <AppButton title='register' buttonColor='secondary' />
            </View>

        </ImageBackground>

    );
}

const styles = StyleSheet.create({
    background: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'flex-end',
    },
    buttonsContainer: {
        width: '100%',
        padding: 15,
    },
    logo: {
        width: 80,
        height: 80,
    },
    logoContainer: {
        alignItems: 'center',
        position: 'absolute',
        top: 80,
    },
});

export default WelcomeScreen;