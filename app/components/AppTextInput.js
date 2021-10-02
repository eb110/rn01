import React from 'react';
import { StyleSheet, TextInput, View } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import defaultStyles from '../config/styles';

function AppTextInput({ icon, width = '100%', ...otherProps }) {
    return (
        <View style={[styles.container, { width }]}>
            {icon && <MaterialCommunityIcons
                name={icon}
                size={20}
                color={defaultStyles.colors.mediumGrey}
                style={styles.icon}
            />}
            <View style={{ flex: 1 }}>
                <TextInput
                    placeholderTextColor={defaultStyles.colors.mediumGrey}
                    style={defaultStyles.text}
                    {...otherProps}
                />
            </View>
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
    },
    icon: {
        marginRight: 10,
    },
});

export default AppTextInput;