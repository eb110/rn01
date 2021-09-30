import React from 'react';
import { FlatList, StyleSheet, View } from 'react-native';

import Card from '../components/Card';
import Screen from '../components/Screen';
import colors from '../config/colors';

const listings = [
    {
        id: 1,
        title: 'Red jacket for sale',
        price: 100,
        image: require('../assets/jacket.jpg')
    },
    {
        id: 2,
        title: 'Couch in great condition',
        price: 600,
        image: require('../assets/couch.jpg')
    },
]

function ListingsScreen(props) {
    return (
        <Screen>
            <View style={styles.container}>
                <FlatList
                    data={listings}
                    keyExtractor={item => item.id.toString()}
                    renderItem={({ item }) =>
                        <Card
                            image={item.image}
                            title={item.title}
                            subTitle={'£' + item.price}
                        />
                    }
                />
            </View>
        </Screen>
    );
}

const styles = StyleSheet.create({
    container: {
        padding: 10,
        backgroundColor: colors.lightGrey,
        flex: 1,
    },
});

export default ListingsScreen;