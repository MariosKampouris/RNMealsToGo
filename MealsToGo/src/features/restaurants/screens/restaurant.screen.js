import React, {useContext, useState} from "react";
import { ActivityIndicator } from "react-native-paper";
import { RestaurantInfoCard } from "../components/restaurant-info-card.component";
import {
    StyleSheet,
    View,
    SafeAreaView,
    FlatList,
    TouchableOpacity
  } from "react-native";

import { LocationContext } from "../../../services/location/location.context";
import { RestaurantsContext } from "../../../services/restaurants/restaurants.context";
import { FavouritesContext } from "../../../services/favourites/favourites.context";

import { Search } from "../components/search.component";
import { FavouritesBar } from "../../../components/favourites/favourites-bar.component";

import { FadeInView } from "../../../components/animations/fade.animation";

export const RestaurantScreen = ({navigation}) => {

  const {isLoading, restaurants, error} = useContext(RestaurantsContext);
  const { error: locationError } = useContext(LocationContext);
  const {favourites} = useContext(FavouritesContext);
  const [isToggled, setIsToggled] = useState(false);

  const hasError = !!error || !!locationError;
  
  return(
  <SafeAreaView style={styles.container}>
    {isLoading && (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size={50} animating={true} color='tomato' style={{marginLeft: -25}} />
      </View>
    )}
    <Search isFavouritesToggled={isToggled} onFavouritesToggle={() => setIsToggled(!isToggled)}/>
    {isToggled && <FavouritesBar favourites={favourites} onNavigate={navigation.navigate}/>}

    {hasError && (
          <Text style={styles.errortext} variant="error">Something went wrong retrieving the data</Text>
      )}

    {!hasError &&(
    <FlatList 
      data={restaurants}
      renderItem={({item}) =>{
      return(
        <FadeInView>
        <TouchableOpacity onPress={() => navigation.navigate("RestaurantDetail", {restaurant: item})}>
            <RestaurantInfoCard restaurant={item}/>
        </TouchableOpacity>
        </FadeInView>
       )}}
      keyExtractor={(item) => item.name}
      contentContainerStyle={{padding: 16}}
    />)}
  
  </SafeAreaView>
  )
  };


const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#ffffff'
    },
    search: {
      padding: 16,
    },
    loadingContainer: {
      position: 'absolute',
      top: '50%',
      left: '50%'
    },
    errortext: {
      padding : 16
    }
  });