import React, { useState } from 'react';
import { Button, FlatList, Modal, StyleSheet, TouchableWithoutFeedback, View } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import AppText from './AppText';
import defaultStyles from '../config/styles';
import colors from '../config/colors';
import PickerItem from './PickerItem';

function AppPicker({ icon, items, placeholder }) {

    const [modalVisible, setModalVisible] = useState(false)

    return (
        <>
            <TouchableWithoutFeedback onPress={() => setModalVisible(true)}>
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
            </TouchableWithoutFeedback>
            <Modal
                visible={modalVisible}
                animationType="slide"
            >
                <Button title='Close' backgroundColor={colors.blue} onPress={() => setModalVisible(false)} />
                <FlatList
                    data={items}
                    keyExtractor={item => item.id.toString()}
                    renderItem={({ item }) =>
                        <PickerItem
                            label={item.label}
                            onPress={() => console.log(item)}
                        />}
                />
            </Modal>
        </>
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