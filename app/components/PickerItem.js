import React from 'react';
import { StyleSheet, TouchableOpacity, View } from 'react-native';

import AppText from './AppText';
import defaultStyles from '../config/styles';

import Screen from './Screen';

function PickerItem({ label, onPress }) {
    return (
        <TouchableOpacity onPress={onPress}>
            <Screen>
                <View style={styles.container}>
                    <AppText style={defaultStyles.text}>{label}</AppText>
                </View>
            </Screen>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    container: {
        padding: 20,
    },
});

export default PickerItem;