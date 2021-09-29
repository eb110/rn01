import React from 'react';
import { Image, StyleSheet, View } from 'react-native';

import colors from '../config/colors';
import AppText from './AppText';

function AppListItem({ image, title, subTitle }) {
    return (
        <View style={styles.container}>
            <Image style={styles.image} source={image} />
            <View style={styles.detailsContainer}>
                <AppText style={styles.title}>{title}</AppText>
                <AppText style={styles.subTitle}>{subTitle}</AppText>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.lightGrey,
        flexDirection: 'row',
        width: '100%',
        padding: 10,
    },
    detailsContainer: {
        justifyContent: 'center',
        paddingLeft: 15,
    },
    image: {
        borderRadius: 35,
        height: 70,
        marginLeft: 15,
        width: 70,
    },
    subTitle: {
        color: colors.mediumGrey,
        fontSize: 16,
    },
    title: {
        fontSize: 20,
    },
});

export default AppListItem;