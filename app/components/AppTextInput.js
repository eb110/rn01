import React from 'react';
import { Platform, StyleSheet, TextInput, View } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import colors from '../config/colors';

function AppTextInput({ icon, ...otherProps }) {
    return (
        <View style={styles.container}>
            {icon && <MaterialCommunityIcons
                name={icon}
                size={20}
                color={colors.mediumGrey}
                style={styles.icon}
            />}
            <TextInput style={styles.text} {...otherProps} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.lightGrey,
        borderRadius: 25,
        flexDirection: 'row',
        marginVertical: 10,
        padding: 15,
        width: '100%',
    },
    icon: {
        marginRight: 10,
    },
    text: {
        fontFamily: Platform.OS === 'android' ? 'serif' : 'Avenir',
        fontSize: 20,
        flex: 1,
        color: colors.darkGrey,
    },
});

export default AppTextInput;