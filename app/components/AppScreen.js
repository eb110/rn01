import React from 'react';
import { StyleSheet, View } from 'react-native';
import Constants from 'expo-constants';

function AppScreen({ children }) {
    return (
        <View style={styles.container}>{children}</View>
    );
}

const styles = StyleSheet.create({
    container: {
        paddingTop: Constants.statusBarHeight,
    }
});

export default AppScreen;