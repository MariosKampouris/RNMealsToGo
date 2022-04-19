import React from 'react';
import { SettingsScreen } from '../../features/settings/settings.screen';
import {FavouritesScreen} from '../../features/settings/favourites.screen';

import{
    createStackNavigator,
    CardStyleInterpolators,
} from '@react-navigation/stack';

const SettingsStack = createStackNavigator();

export const SettingsNavigator = ({route, navigation}) => {
    return(
        <SettingsStack.Navigator
            headerMode = "screen"
            screenOptions={{
                cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
                gestureEnabled : true
            }}
        >
            <SettingsStack.Screen
                options={{
                    header: () => null
                }}
                name = 'Settings'
                component={SettingsScreen}
            />
            <SettingsStack.Screen
                options={{
                    
                }}
                name = 'Favourites'
                component={FavouritesScreen}
            />
        </SettingsStack.Navigator>
    );
};