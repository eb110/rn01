import React from 'react';
import { Image, StyleSheet, View } from 'react-native';

import colors from '../config/colors';

function ViewImageScreen(props) {
    return (
        <View style={styles.container}>
            <View style={styles.buttons}>
                <View style={styles.closeIcon} />
                <View style={styles.deleteIcon} />
            </View>
            <Image
                style={styles.image}
                source={require('../assets/chair.jpg')}
                resizeMode='contain'
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.black,
    },
    closeIcon: {
        backgroundColor: colors.primary,
        height: 50,
        left: 30,
        position: 'absolute',
        top: 40,
        width: 50,
    },
    deleteIcon: {
        backgroundColor: colors.secondary,
        height: 50,
        right: 30,
        position: 'absolute',
        top: 40,
        width: 50,
    },
    image: {
        width: '100%',
        height: '100%',
    },
});

export default ViewImageScreen;