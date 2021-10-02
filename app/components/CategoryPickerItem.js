import React from 'react';
import { StyleSheet, TouchableOpacity, View } from 'react-native';

import AppText from './AppText';
import defaultStyles from '../config/styles';
import Icon from './Icon';
import Screen from './Screen';

function CategoryPickerItem({ item, onPress }) {
    return (
        <TouchableOpacity onPress={onPress}>
            <View style={styles.container}>
                <Icon
                    name={item.icon}
                    backgroundColor={defaultStyles.colors[item.iconBackgroundColor]}
                    iconColor={defaultStyles.colors[item.iconColor]}
                    size={80}
                />
                <AppText style={styles.text}>{item.label}</AppText>
            </View>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    container: {
        paddingVertical: 20,
        paddingHorizontal: 20,
        alignItems: 'center',
    },
    text: {
        marginTop: 5,
        fontSize: 14,
    },
});

export default CategoryPickerItem;