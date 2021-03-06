import React from 'react';
import { Platform, StyleSheet, Text, View } from 'react-native';

import colors from '../config/colors';

function AppText({ children, style, ...otherProps }) {
    return (
        <Text
            style={[styles.text, style]}
            {...otherProps}
        >
            {children}
        </Text>
    );
}

const styles = StyleSheet.create({
    text: {
        fontFamily: Platform.OS === 'android' ? 'serif' : 'Avenir',
        fontSize: 20,
        color: colors.black,
    }
})

export default AppText;