import React from 'react';
import { Image, StyleSheet, View } from 'react-native';
import colors from '../config/colors';
import AppText from './AppText';

function AppCard({ title, subTitle, image }) {
    return (
        <View style={styles.card}>
            <Image
                style={styles.image}
                resizeMode='contain'
                source={image}
            />
            <View style={styles.detailsContainer}>
                <AppText style={styles.title}>{title}</AppText>
                <AppText style={styles.subTitle}>{subTitle}</AppText>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    card: {
        width: '100%',
        height: '50%',
        backgroundColor: colors.white,
        borderRadius: 25,
        marginBottom: 20,
        overflow: 'hidden',
    },
    detailsContainer: {
        padding: 10,
        paddingLeft: 20,
    },
    image: {
        width: '100%',
        height: '72%',
        alignSelf: 'center',
    },
    subTitle: {
        color: colors.secondary,
    },
    title: {
        fontSize: 24,
        marginBottom: 7,
    },
});

export default AppCard;