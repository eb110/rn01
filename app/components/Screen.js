import React from 'react';
import { StyleSheet, View } from 'react-native';
import Constants from 'expo-constants';
import colors from '../config/colors';

function Screen({ children }) {
    return (
        <View style={styles.container}>{children}</View>
    );
}

const styles = StyleSheet.create({
    container: {
        paddingTop: Constants.statusBarHeight,
        backgroundColor: colors.warmYellow,
        flex: 1,
    }
});

export default Screen;