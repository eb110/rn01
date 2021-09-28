import React from 'react';
import { Platform, StyleSheet, Text, View } from 'react-native';

function AppText({ children }) {
    return (
        <View style={{

        }}>
            <Text style={styles.text}>{children}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    text: {
        fontFamily: Platform.OS === 'android' ? 'serif' : 'Avenir',
        fontSize: 20,
        fontWeight: 'bold',
    }
})

export default AppText;