import React from 'react';
import { Image, StyleSheet, TouchableHighlight, View } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Swipeable } from 'react-native-gesture-handler';

import AppText from './AppText';
import defaultStyles from '../config/styles';

function ListItem({ image, IconComponent, onPress, renderRightActions, subTitle, title }) {
    return (
        <Swipeable
            renderRightActions={renderRightActions}
        >
            <TouchableHighlight
                onPress={onPress}
                underlayColor={defaultStyles.colors.yellow}
            >
                <View style={styles.container}>
                    {IconComponent}
                    {image && <Image style={styles.image} source={image} />}
                    <View style={styles.detailsContainer}>
                        <AppText numberOfLines={1}>{title}</AppText>
                        {subTitle && <AppText style={styles.subTitle} numberOfLines={1}>{subTitle}</AppText>}
                    </View>
                    <MaterialCommunityIcons
                        name='chevron-right'
                        color={defaultStyles.colors.mediumGrey}
                        size={30}
                    />
                </View>
            </TouchableHighlight>
        </Swipeable>
    );
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        backgroundColor: defaultStyles.colors.lightGrey,
        flexDirection: 'row',
        padding: 10,
        width: '100%',
    },
    detailsContainer: {
        flex: 1,
        justifyContent: 'center',
        paddingLeft: 15,
    },
    image: {
        borderRadius: 35,
        height: 70,
        marginLeft: 10,
        width: 70,
    },
    subTitle: {
        color: defaultStyles.colors.mediumGrey,
        fontSize: 16,
    },
});

export default ListItem;