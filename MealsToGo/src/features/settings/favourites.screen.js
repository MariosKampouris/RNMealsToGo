import React, {useContext} from 'react';
import {FavouritesContext} from '../../services/favourites/favourites.context'
import { SafeAreaView, Text, StyleSheet, TouchableOpacity, FlatList, View} from 'react-native';
import { RestaurantInfoCard } from '../restaurants/components/restaurant-info-card.component';
import LottieView from 'lottie-react-native';

export const FavouritesScreen = ({navigation}) => {

    const {favourites} = useContext(FavouritesContext)

    return favourites.length ?
    (
    <SafeAreaView>
        <FlatList 
        data={favourites}
        renderItem={({item}) =>{
        return(
             <TouchableOpacity onPress={() => navigation.navigate("RestaurantDetail", {restaurant: item})}>
                 <RestaurantInfoCard restaurant={item}/>
             </TouchableOpacity>
         )}}
        keyExtractor={(item) => item.name}
        contentContainerStyle={{padding: 16}}
    />
    </SafeAreaView>
    ) :
    (
        <SafeAreaView>
            <View style={styles.nofavcontainer}>
                <View style={styles.animationwrapper}>
                    <LottieView
                        key='animation'
                        autoPlay
                        loop
                        resizeMode='cover'
                        source={require('../../../assets/notfound.json')}
                    />
                </View>
                 <Text style={styles.nofavtextstyle}>No Favourites Yet</Text>
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create ({
    titleContainer : {
        alignItems: "center", 
        justifyContent:"center"
    },
    nofavcontainer: {
        alignItems: 'center'
    },
    nofavtextstyle : {
        marginTop : 380,
        fontFamily : 'Oswald_400Regular',
        fontSize : 26
    },
    animationwrapper:{
        width: 420,
        height: 420,
        position: 'absolute',
        top: -40,
        padding: 9
    }
});