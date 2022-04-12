import React from 'react';
import { ImageBackground, StyleSheet, Text, View, SafeAreaView } from "react-native";



export const RegisterScreen = () => {
    return (
        <SafeAreaView style={styles.maincontainer}>
            <View style={styles.coverview}>
            <ImageBackground source={require('../../../../assets/home_bg.jpg')} 
            resizeMode='cover'
            style={styles.image}
            >

                <View style={styles.coverview}>
                    <Text>Register Screen</Text>
                </View>

            </ImageBackground>
            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create ({
    maincontainer : {
        flex : 1,
        alignItems : 'center'
    },
    image :{
        flex: 1,
        justifyContent: "center"
    },
    coverview: {
        position: 'absolute',
        width: '100%',
        height: '100%',
        backgroundColor: 'rgba(255,255,255,0.2)'
    }
});