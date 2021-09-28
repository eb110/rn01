import React from 'react';
import { Platform, StyleSheet, Text, View } from 'react-native';

import colors from '../config/colors';

function AppText({ children, textColor = 'black', textSize = 18 }) {
    return (
        <View style={{

        }}>
            <Text style={[styles.text, { fontSize: textSize, color: colors[textColor] }]}>{children}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    text: {
        fontFamily: Platform.OS === 'android' ? 'serif' : 'Avenir',
        fontWeight: 'bold',
    }
})

export default AppText;