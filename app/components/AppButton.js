import React from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';

import AppText from './AppText.js';
import defaultStyles from '../config/styles';

function AppButton({ buttonColor = 'secondary', onPress, title }) {
    return (
        <TouchableOpacity
            style={[styles.button, { backgroundColor: defaultStyles.colors[buttonColor] }]}
            onPress={onPress}>
            <AppText style={[defaultStyles.text, { textTransform: 'capitalize' }]}>{title}</AppText>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    button: {
        borderRadius: 25,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 15,
        width: '100%',
        marginVertical: 10,
    },
})

export default AppButton;