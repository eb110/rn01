import React from 'react';
import { Image, StyleSheet, View } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import colors from '../config/colors';

function ImageInput({ imageUri }) {
    return (
        <View style={styles.container}>
            {!imageUri ? <MaterialCommunityIcons name='camera' size={40} color={colors.mediumGrey} /> :
                <Image source={{ uri: imageUri }} style={styles.image} />}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        backgroundColor: colors.lightGrey,
        borderRadius: 15,
        height: 100,
        justifyContent: 'center',
        overflow: 'hidden',
        width: 100,
    },
    image: {
        height: '100%',
        width: '100%',
    },
});

export default ImageInput;