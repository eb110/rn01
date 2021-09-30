import React, { useState } from 'react';
import { FlatList, StyleSheet, View } from 'react-native';

import ListItem from '../components/ListItem';
import ListItemSeparator from '../components/ListItemSeparator';
import Screen from '../components/Screen';
import ListItemDeleteAction from '../components/ListItemDeleteAction';

const initialMessages = [
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

    const [messages, setMessages] = useState(initialMessages);
    const [refreshing, setRefreshing] = useState(false);

    const handleDelete = message => {
        //the update of the state will rerender the component
        setMessages(messages.filter(x => x.id !== message.id));
    }

    return (
        <Screen>
            <FlatList
                data={messages}
                keyExtractor={message => message.id.toString()}
                renderItem={({ item }) =>
                    <ListItem
                        image={item.image}
                        title={item.title}
                        subTitle={item.description}
                        onPress={() => console.log('dupa')}
                        renderRightActions={() => <ListItemDeleteAction onPress={() => handleDelete(item)} />}
                    />}
                ItemSeparatorComponent={ListItemSeparator}
                refreshing={refreshing}
                onRefresh={() => {
                    setMessages([{
                        id: 4,
                        title: 'sandra',
                        description: 'poczus',
                        image: require('../assets/sandra.jpg')
                    }])
                }}
            />
        </Screen>
    );
}

const styles = StyleSheet.create({

})

export default MessagesScreen;