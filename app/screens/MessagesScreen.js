import React from 'react';
import { FlatList, StyleSheet, View } from 'react-native';

import AppListItem from '../components/AppListItem';

const messages = [
    {
        id: 1,
        title: 'wladek',
        desription: 'nomnom',
        image: require('../assets/wladek.jpg')
    },
    {
        id: 2,
        title: 'gabi',
        desription: 'mimim',
        image: require('../assets/gabi.jpg')
    },
    {
        id: 3,
        title: 'blondyna',
        desription: 'blondi',
        image: require('../assets/Natalia.jpg')
    },
]

function MessagesScreen(props) {
    return (
        <View style={styles.container}>
            <FlatList
                data={messages}
                keyExtractor={message => message.id.toString()}
                renderItem={({ item }) =>
                    <AppListItem
                        image={item.image}
                        title={item.title}
                        subTitle={item.desription}
                    />}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {

    }
});

export default MessagesScreen;