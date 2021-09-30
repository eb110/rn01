import React from 'react';
import { StyleSheet, View } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import AppText from './AppText';
import Icon from './Icon';

import defaultStyles from '../config/styles';

function AppPicker({ icon, placeholder, ...otherProps }) {
    return (
        <View style={styles.container}>
            {icon && <MaterialCommunityIcons
                name={icon}
                size={20}
                color={defaultStyles.colors.mediumGrey}
                style={styles.icon}
            />}
            <View style={{ flex: 1 }}>
                <AppText>{placeholder}</AppText>
            </View>
            <MaterialCommunityIcons
                name='chevron-down'
                size={30}
                color={defaultStyles.colors.mediumGrey}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: defaultStyles.colors.lightGrey,
        borderRadius: 25,
        flexDirection: 'row',
        marginVertical: 10,
        padding: 15,
        width: '100%',
    },
    icon: {
        marginRight: 10,
    },
});

export default AppPicker;