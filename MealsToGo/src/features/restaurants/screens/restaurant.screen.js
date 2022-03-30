import React, {useContext} from "react";
import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import { Searchbar, ActivityIndicator } from "react-native-paper";
import { RestaurantInfoCard } from "../components/restaurant-info-card.component";
import {
    StyleSheet,
    View,
    SafeAreaView,
    FlatList,
    TouchableOpacity
  } from "react-native";

import { RestaurantsContext } from "../../../services/restaurants/restaurants.context";
import { Search } from "../components/search.component";

export const RestaurantScreen = ({navigation}) => {

  const {isLoading, error, restaurants} = useContext(RestaurantsContext);

  return(
  <SafeAreaView style={styles.container}>
    {isLoading && (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size={50} animating={true} color='tomato' style={{marginLeft: -25}} />
      </View>
    )}
    <Search/>
    <FlatList 
      data={restaurants}
      renderItem={({item}) =>{
      console.log(item);
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