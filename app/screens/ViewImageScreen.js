import React from 'react';
import { Image, StyleSheet, View } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import colors from '../config/colors';

function ViewImageScreen(props) {
    return (
        <View style={styles.container}>
            <View style={styles.closeIcon}>
                <MaterialCommunityIcons name='close' color={colors.white} size={40} />
            </View>
            <View style={styles.deleteIcon}>
                <MaterialCommunityIcons name='trash-can-outline' color={colors.white} size={40} />
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
        left: 30,
        position: 'absolute',
        top: 40,
    },
    deleteIcon: {
        right: 30,
        position: 'absolute',
        top: 40,
    },
    image: {
        width: '100%',
        height: '100%',
    },
});

export default ViewImageScreen;