import React, { useState } from 'react';
import { Button, FlatList, Modal, Platform, StyleSheet, TouchableWithoutFeedback, View } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import AppText from './AppText';
import defaultStyles from '../config/styles';
import PickerItem from './PickerItem';

function AppPicker({
    icon,
    items,
    numberOfColumns = 1,
    onSelectItem,
    PickerItemComponent = PickerItem,
    placeholder,
    selectedItem,
    width = '100%'
}) {

    const [modalVisible, setModalVisible] = useState(false)

    return (
        <>
            <TouchableWithoutFeedback onPress={() => setModalVisible(true)}>
                <View style={[styles.container, { width }]}>
                    {icon && <MaterialCommunityIcons
                        name={icon}
                        size={20}
                        color={defaultStyles.colors.mediumGrey}
                        style={styles.icon}
                    />}
                    <View style={{ flex: 1 }}>
                        {selectedItem ? (<AppText>{selectedItem.label}</AppText>) :
                            (<AppText style={styles.placeholder}>{placeholder}</AppText>)}
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
                <Button title='Close' backgroundColor={defaultStyles.colors.blue} onPress={() => setModalVisible(false)} />
                <FlatList
                    data={items}
                    keyExtractor={item => item.id.toString()}
                    numColumns={numberOfColumns}
                    renderItem={({ item }) => (
                        <PickerItemComponent
                            item={item}
                            onPress={() => {
                                setModalVisible(false);
                                onSelectItem(item);
                                //example
                                // const [category, setCategory] = useState();
                                //       selectedItem={category}
                                //onSelectItem={item => setCategory(item)}
                            }}
                        />)}
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
    },
    icon: {
        marginRight: 10,
    },
    placeholder: {
        fontSize: 20,
        color: defaultStyles.colors.mediumGrey,
        fontFamily: Platform.OS === 'android' ? 'serif' : 'Avenir',
    },
});

export default AppPicker;