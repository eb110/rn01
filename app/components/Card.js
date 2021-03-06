import React from 'react';
import { Image, StyleSheet, View } from 'react-native';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';
import colors from '../config/colors';
import AppText from './AppText';

function Card({ title, subTitle, image, onPress }) {
    return (
        <TouchableWithoutFeedback onPress={onPress}>
            <View style={styles.card}>
                <Image
                    style={styles.image}
                    source={image}
                />
                <View style={styles.detailsContainer}>
                    <AppText style={styles.title} numberOfLines={1}>{title}</AppText>
                    <AppText style={styles.subTitle} numberOfLines={1}>{subTitle}</AppText>
                </View>
            </View>
        </TouchableWithoutFeedback>
    );
}

const styles = StyleSheet.create({
    card: {
        width: '100%',
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
        height: 200,
    },
    subTitle: {
        color: colors.secondary,
    },
    title: {
        fontSize: 24,
        marginBottom: 7,
    },
});

export default Card;