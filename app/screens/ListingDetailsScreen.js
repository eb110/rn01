import React from 'react';
import { Image, StyleSheet, View } from 'react-native';

import colors from '../config/colors';
import AppText from '../components/AppText';
import ListItem from '../components/ListItem';

function ListingDetailsScreen(props) {
    return (
        <View style={styles.container}>
            <Image style={styles.image} source={require('../assets/jacket.jpg')} />
            <View style={styles.detailsContainer}>
                <AppText style={styles.title}>Jacket for sale</AppText>
                <AppText style={styles.subTitle}>200£</AppText>
            </View>
            <ListItem
                image={require('../assets/wladek.jpg')}
                title='Wladek'
                subTitle='wfigura@op.pl'
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    detailsContainer: {
        padding: 15,
    },
    image: {
        height: 300,
        width: '100%',
    },
    subTitle: {
        color: colors.secondary,
        fontSize: 20,
    },
    title: {
        fontSize: 24,
        marginBottom: 7,
    },
});

export default ListingDetailsScreen;