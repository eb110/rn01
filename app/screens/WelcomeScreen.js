import React from 'react';
import { StyleSheet, View, Text, Image, ImageBackground } from 'react-native';

import colors from '../config/colors';

function WelcomeScreen(props) {
    return (

        <ImageBackground
            style={styles.background}
            source={require('../assets/background.jpg')}
        >
            <View style={styles.logoContainer}>
                <Image
                    source={require('../assets/logo-red.png')}
                    style={styles.logo}
                />
                <Text
                    style={styles.logoText}
                >
                    Sell what you don't need
                </Text>
            </View>
            <View style={styles.loginButton} />
            <View style={styles.registerButton} />

        </ImageBackground>

    );
}

const styles = StyleSheet.create({
    background: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'flex-end',
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
    logoText: {
        fontSize: 18,
    },
    loginButton: {
        width: '100%',
        height: 70,
        backgroundColor: colors.primary,
        justifyContent: 'flex-end',
    },
    registerButton: {
        width: '100%',
        height: 70,
        backgroundColor: colors.secondary,
        justifyContent: 'flex-end',
    },
});

export default WelcomeScreen;