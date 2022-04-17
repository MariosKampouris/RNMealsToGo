import React, {useContext, useState} from "react";
import { Text } from "react-native";
import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import { Searchbar, ActivityIndicator } from "react-native-paper";
import { RestaurantInfoCard } from "../components/restaurant-info-card.component";
import { isSignedIn } from "../../settings/settings.screen";
import {
    StyleSheet,
    View,
    SafeAreaView,
    FlatList,
    TouchableOpacity
  } from "react-native";

import { RestaurantsContext } from "../../../services/restaurants/restaurants.context";
import { FavouritesContext } from "../../../services/favourites/favourites.context";

import { Search } from "../components/search.component";
import { FavouritesBar } from "../../../components/favourites/favourites-bar.component";

export const RestaurantScreen = ({navigation}) => {

  const {isLoading, error, restaurants} = useContext(RestaurantsContext);
  const {favourites} = useContext(FavouritesContext);
  const [isToggled, setIsToggled] = useState(false);

  return(
  <SafeAreaView style={styles.container}>
    {isLoading && (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size={50} animating={true} color='tomato' style={{marginLeft: -25}} />
      </View>
    )}
    <Search isFavouritesToggled={isToggled} onFavouritesToggle={() => setIsToggled(!isToggled)}/>
    {isToggled && <FavouritesBar favourites={favourites} onNavigate={navigation.navigate}/>}
    <FlatList 
      data={restaurants}
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
    }
  });