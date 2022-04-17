import React, {useContext, createContext} from 'react';
import {Button, TouchableOpacity, SafeAreaView, View, StyleSheet} from 'react-native';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut} from "firebase/auth";
import { authentication } from '../../../firebase/firebase-config';
import { AuthenticationContext } from '../../services/authentication/authentication.context';
import {List, Avatar} from 'react-native-paper';

export const SettingsScreen = ({navigation}) => {

const {onLogout} = useContext(AuthenticationContext);

    return(
        <>
            <SafeAreaView style={{backgroundColor: '#FFFFFF'}}>
                <Avatar.Icon size={180} icon='human' backgroundColor='#2182BD'/>
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

    }
})