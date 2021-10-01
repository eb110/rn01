import React from 'react';
import { StyleSheet, View } from 'react-native';

import AppText from './AppText';
import defaultSyles from '../config/styles';

function AppErrorMessage({ error, textColor = 'danger' }) {

    if (!error) return null;

    return (
        <View style={styles.container}>
            <AppText style={[styles.container, { color: defaultSyles.colors[textColor] }]}>{error}</AppText>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
    }
});

export default AppErrorMessage;