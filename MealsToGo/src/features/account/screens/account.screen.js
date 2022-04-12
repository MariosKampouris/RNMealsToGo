import React from 'react';
import { ImageBackground, StyleSheet, Text, View, SafeAreaView} from "react-native";
import { Button } from 'react-native-paper';

export const AccountScreen = ({navigation}) => {

    return (
        <>
        <SafeAreaView style={styles.maincontainer}>
            <ImageBackground source={require('../../../../assets/home_bg.jpg')} 
            resizeMode='cover'
            style={styles.image}
            >
                <View style={styles.coverview}>
                    <Text style={[styles.maintitle, {fontFamily:'Oswald_400Regular'}]}>Meals To Go</Text>
                    <View style={styles.accountcontainer}>
                        <Button onPress={() => navigation.navigate("Login")} icon='lock-open-outline' color='#2182BD' mode='contained' style={styles.buttonstyling}>
                            LOGIN
                        </Button>
                        <Button onPress={() => navigation.navigate("Register")} icon='clipboard-text-outline' color='#2182BD' mode='contained' style={styles.buttonstyling}>
                            REGISTER
                        </Button>
                    </View>
                </View>
            </ImageBackground>
        </SafeAreaView>
        </>
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
        marginTop: 6
    },
    buttonstyling: {
        color: '#2182BD',
        padding: 6,
        marginTop: 16
    },
    maintitle: {
        fontSize: 40,
    }
});