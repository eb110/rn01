import React from 'react';
import { Platform, StyleSheet, Text, View } from 'react-native';

import colors from '../config/colors';

function AppText({ children, style }) {
    return (
        <Text style={[styles.text, style]}>{children}</Text>
    );
}

const styles = StyleSheet.create({
    text: {
        fontFamily: Platform.OS === 'android' ? 'serif' : 'Avenir',
        fontWeight: 'bold',
        fontSize: 18,
        color: colors.black,
    }
})

export default AppText;