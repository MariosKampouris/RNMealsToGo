import React, {useContext, useEffect, useState} from 'react';
import {SafeAreaView, View, StyleSheet,Text, TouchableOpacity} from 'react-native';
import { AuthenticationContext } from '../../services/authentication/authentication.context';
import {List, Avatar} from 'react-native-paper';
import { useFocusEffect } from '@react-navigation/native';

import AsyncStorage from '@react-native-async-storage/async-storage';

export const SettingsScreen = ({navigation}) => {

const {onLogout, user} = useContext(AuthenticationContext);
const [photo, setPhoto] = useState(null);
const getProfilePicture = async (currentUser) => {
    const photoUri = await AsyncStorage.getItem(`${currentUser.uid}-photo`);
    setPhoto(photoUri);
}

useFocusEffect(
    React.useCallback(() => {
    getProfilePicture(user);
    }, [user])
    );

    return(
        <>
            <SafeAreaView style={{backgroundColor: '#FFFFFF'}}>
            <TouchableOpacity onPress={() => navigation.navigate("Camera")}>
                <View style={styles.avatarcontainer}>
                    {!photo && (<Avatar.Icon size={180} icon='human' backgroundColor='#e6755e'/>)}
                    {photo && (<Avatar.Image size={180} source={{uri : photo}} backgroundColor='#e6755e'/>)}
                </View>
            </TouchableOpacity>
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