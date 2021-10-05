import React from 'react';
import { FlatList, StyleSheet, View } from 'react-native';

import Screen from '../components/Screen';
import ListItem from '../components/ListItem';
import colors from '../config/colors';
import Icon from '../components/Icon';
import ListItemSeparator from '../components/ListItemSeparator';

const menuItems = [
    {
        title: 'My Listings',
        icon: {
            name: 'format-list-bulleted',
            backgroundColor: colors.primary,
        },
        targetScreen: 'MyListings',
    },
    {
        title: 'My Messages',
        icon: {
            name: 'email',
            backgroundColor: colors.secondary,
        },
        tergetScreen: 'Messages',
    },
]

function AccountScreen({ navigation }) {
    return (
        <Screen style={styles.screen}>
            <View style={styles.container}>
                <ListItem
                    title='Natalia'
                    subTitle='Blondyna'
                    image={require('../assets/Natalia.jpg')}
                />
            </View>
            <View style={styles.listContainer}>
                <FlatList
                    data={menuItems}
                    keyExtractor={item => item.title}
                    renderItem={({ item }) =>
                        <ListItem
                            title={item.title}
                            IconComponent={<Icon
                                name={item.icon.name}
                                backgroundColor={item.icon.backgroundColor}
                            />}
                            onPress={() => navigation.navigate(item.tergetScreen)}
                        />
                    }
                    ItemSeparatorComponent={ListItemSeparator}
                />
            </View>
            <ListItem
                title='Log Out'
                IconComponent={
                    <Icon name='logout' backgroundColor={colors.danger} />
                }
            />
        </Screen>
    );
}

const styles = StyleSheet.create({
    container: {
        marginVertical: 30,
    },
    listContainer: {
        marginBottom: 30,
    },
    screen: {
        backgroundColor: colors.warmYellow,
    },
});

export default AccountScreen;