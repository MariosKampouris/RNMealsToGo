import React from 'react';
import {View, Text, StyleSheet, Image, Platform} from 'react-native';
import WebView from 'react-native-webview';



const isAndroid = Platform.OS ==='android';
export const CompactRestaurantInfo = ({restaurant, isMap}) => {
    const CustomImage = isAndroid && isMap ? (WebView) : Image 
    return(
    <View style={styles.container}>
        <CustomImage style={styles.imagestyle} source={{uri: restaurant.photos[0] }}/>
        <Text style={styles.titlestyle}>
            {restaurant.name}
        </Text>
    </View>      
    );
};

const styles = StyleSheet.create({
    container:{
        padding: 10,
        maxWidth : 140,
        alignItems: 'center',
    },
    titlestyle : {
        paddingTop: 6,
        fontSize: 15,
        fontFamily:'Oswald_400Regular',
    },
    imagestyle : {
        height : 120,
        width : 140,
        borderRadius: 15,
    }
});