import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import ListingsScreen from '../screens/ListingsScreen';
import ListingDetailsScreen from '../screens/ListingDetailsScreen';

const Stack = createNativeStackNavigator();

const FeedNavigator = () => (
    <Stack.Navigator mode='modal'>
        <Stack.Screen name='Listing' component={ListingsScreen} />
        <Stack.Screen
            component={ListingDetailsScreen}
            name='ListingDetails'
            options={{
                headerShown: false,
            }}
        />
    </Stack.Navigator>
)

export default FeedNavigator;