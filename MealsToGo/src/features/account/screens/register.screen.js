import React, {useState, useContext} from 'react';
import { ImageBackground, StyleSheet, View, SafeAreaView, Text } from "react-native";
import { Button, TextInput  } from 'react-native-paper';
import { Navigation } from '../../../infrastructure/navigation';
import { AuthenticationContext } from '../../../services/authentication/authentication.context';
import { ActivityIndicator, Colors } from 'react-native-paper';


export const RegisterScreen = ({navigation}) => {


const[email, setEmail] = useState("");
const[password, setPassword] = useState("");
const[repeatedPassword, setRepeatedPassword] = useState("");
const {onRegister, isLoading, error} = useContext(AuthenticationContext);

    return (
        <SafeAreaView style={styles.maincontainer}>
            <ImageBackground source={require('../../../../assets/home_bg.jpg')} 
            resizeMode='cover'
            style={styles.image}
            >
                <View style={styles.coverview}>
                <Text style={[styles.maintitle, {fontFamily:'Oswald_400Regular'}]}>Meals To Go</Text>
                    <View style={styles.accountcontainer}>
                        <TextInput
                            style={styles.textinputstyling}
                            mode='outlined'
                            label="Email"
                            textContentType='emailAddress'
                            autoCapitalize='none'
                            placeholder='Type your email'
                            value={email}
                            onChangeText={email => setEmail(email)}
                        />
                        <TextInput
                            style={styles.textinputstyling}
                            mode='outlined'
                            label="Password"
                            textContentType='password'
                            autoCapitalize='none'
                            secureTextEntry={true}
                            placeholder='Type your password'
                            value={password}
                            onChangeText={password => setPassword(password)}
                        />
                        <TextInput
                            style={styles.textinputstyling}
                            mode='outlined'
                            label="Repeat Password"
                            textContentType='password'
                            autoCapitalize='none'
                            secureTextEntry={true}
                            placeholder='Repeat your password'
                            value={repeatedPassword}
                            onChangeText={repeatedPassword => setRepeatedPassword(repeatedPassword)}
                        />
                        {!isLoading ? (<Button onPress={() => onRegister(email, password, repeatedPassword)} icon='clipboard-text-outline' color='#2182BD' mode='contained' style={styles.buttonstyling}>
                            REGISTER
                        </Button>) : (
                            <ActivityIndicator animating={true} color={'blue'}/>
                        )}
                    </View>
                    <Button onPress={() => navigation.goBack()} icon='arrow-left-bold' color='#2182BD' mode='contained' style={styles.backbuttonstyling}>
                            BACK
                    </Button>
                </View>
            </ImageBackground>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create ({
    maincontainer : {
        flex : 1,
    },
    image :{
        flex: 1,
        justifyContent: "center",
        alignItems : 'center'
    },
    coverview: {
        position: 'absolute',
        width: '100%',
        height: '100%',
        backgroundColor: 'rgba(255,255,255,0.2)',
        alignItems : 'center',
        justifyContent: "center",
    },
    accountcontainer: {
        backgroundColor: 'rgba(255,255,255,0.7)',
        padding: 44,
        marginTop: 6,
        alignItems: 'center'
    },
    buttonstyling: {
        color: '#2182BD',
        padding: 6,
        marginTop: 16,
        width: 140
    },
    backbuttonstyling: {
        color: '#2182BD',
        padding: 6,
        marginTop: 16,
        width: 100
    },
    textinputstyling:{
        padding: 6,
        width: 240,
        height: 35,
        marginTop: 8,
    },
    maintitle: {
        fontSize: 40,
    }
});