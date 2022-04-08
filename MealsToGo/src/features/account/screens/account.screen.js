import React from 'react';
import { ImageBackground, StyleSheet, Text, View, SafeAreaView } from "react-native";



export const AccountScreen = () => {
    return (
        <SafeAreaView style={styles.maincontainer}>
            <ImageBackground source={require('../../../../assets/home_bg.jpg')} 
            resizeMode='cover'
            style={styles.image}
            >
                <Text>Account Screen</Text>
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
        justifyContent: "center"
    }
});