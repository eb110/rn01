import React from 'react';
import { FlatList, StyleSheet } from 'react-native';

import AppListItem from '../components/AppListItem';
import AppScreen from '../components/AppScreen';

const messages = [
    {
        id: 1,
        title: 'wladek',
        description: 'nomnom',
        image: require('../assets/wladek.jpg')
    },
    {
        id: 2,
        title: 'gabi',
        description: 'mimim',
        image: require('../assets/gabi.jpg')
    },
    {
        id: 3,
        title: 'blondyna',
        description: 'blondi',
        image: require('../assets/Natalia.jpg')
    },
]

function MessagesScreen(props) {
    return (
        <AppScreen>
            <FlatList
                data={messages}
                keyExtractor={message => message.id.toString()}
                renderItem={({ item }) =>
                    <AppListItem
                        image={item.image}
                        title={item.title}
                        subTitle={item.description}
                    />}
            />
        </AppScreen>
    );
}

const styles = StyleSheet.create({

})

export default MessagesScreen;