import React from 'react';
import {Text,View} from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import {AccountScreen} from '../../features/account/screens/account.screen'

const Stack = createStackNavigator();

export const AccountNavigator = () => {
    return(
        <Stack.Navigator headerMode="none">
            <Stack.Screen name="Main" component={() =>(
                <AccountScreen/>
            )}/>
            <Stack.Screen name="Login" component={() =>(
                <View>
                    <Text>Login Screen</Text>
                </View>
            )}/>
            <Stack.Screen name="Register" component={() =>(
                <View>
                    <Text>Register Screen</Text>
                </View>
            )}/>
        </Stack.Navigator>
    );
};