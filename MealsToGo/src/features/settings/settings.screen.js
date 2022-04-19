import React, {useContext} from 'react';
import {SafeAreaView, View, StyleSheet, Text} from 'react-native';
import { AuthenticationContext } from '../../services/authentication/authentication.context';
import {List, Avatar} from 'react-native-paper';

export const SettingsScreen = ({navigation}) => {

const {onLogout, user} = useContext(AuthenticationContext);

    return(
        <>
            <SafeAreaView style={{backgroundColor: '#FFFFFF'}}>
                <View style={styles.avatarcontainer}>
                    <Avatar.Icon size={180} icon='human' backgroundColor='#2182BD'/>
                </View>
                <View style={styles.avatarcontainer}>
                    <Text variant='caption'>{user.email}</Text>
                </View>
                <List.Section>
                    <List.Item
                        style={styles.listitem}
                        title="Favourites"
                        description="View your favourites"
                        left={(props) => <List.Icon {...props} color="black" icon="heart" />}
                        onPress={() => navigation.navigate("Favourites")}
                    />
                    <List.Item
                        style={styles.listitem}
                        title="Logout"
                        left={(props) => <List.Icon {...props} color='black' icon="door" />}
                        onPress={onLogout}
                    />

                </List.Section>
            </SafeAreaView>
        </>
    );
};

const styles = StyleSheet.create ({
    listitem : {
        padding : 16
    },
    avatarcontainer: {
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: 14,
        paddingBottom: 14
    }
})