import React from 'react';
import {View, ScrollView, StyleSheet, TouchableOpacity, Text } from 'react-native';
import {CompactRestaurantInfo} from '../restaurant/restaurant-info.component';

export const FavouritesBar =({favourites, onNavigate})=> {
    if (!favourites.length){
        return null;
    }
    return(
        <View style={styles.favwrapper}>
            <View>
                <Text style={styles.favtitlestyle}>Favourites</Text>
            </View>
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                {favourites.map((restaurant) => {
                    const key = restaurant.name;
                    return(
                        <View key={key} style={{marginRight: 15}}>
                            <TouchableOpacity onPress={() =>
                                onNavigate("RestaurantDetail", {restaurant,})
                            }>
                             <CompactRestaurantInfo restaurant={restaurant}/>
                            </TouchableOpacity>
                        </View>
                    );
                })}
            </ScrollView>
        </View>
    );
};

const styles = StyleSheet.create({
    favwrapper: {
        paddingLeft: 8,
        paddingRight: 8,
    },
    favtitlestyle:{
        fontFamily:'Oswald_400Regular',
        fontSize : 16
    }
});