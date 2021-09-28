import React from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';

import colors from '../config/colors.js'
import AppText from './AppText.js';

function AppButton({ buttonColor, onPress, textStyle, title }) {
    return (
        <TouchableOpacity style={[styles.button, { backgroundColor: colors[buttonColor] }]} onPress={onPress}>
            <AppText style={textStyle}>{title}</AppText>
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