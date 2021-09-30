import React from 'react';
import { StyleSheet, TextInput, View } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import defaultStyles from '../config/styles';

function AppTextInput({ icon, ...otherProps }) {
    return (
        <View style={styles.container}>
            {icon && <MaterialCommunityIcons
                name={icon}
                size={20}
                color={defaultStyles.colors.mediumGrey}
                style={styles.icon}
            />}
            <View style={{ flex: 1 }}>
                <TextInput style={defaultStyles.text} {...otherProps} />
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
        width: '100%',
    },
    icon: {
        marginRight: 10,
    },
});

export default AppTextInput;