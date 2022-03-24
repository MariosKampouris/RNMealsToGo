import React, {useContext} from "react";
import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import { Searchbar } from "react-native-paper";
import { RestaurantInfoCard } from "../components/restaurant-info-card.component";
import {
    StyleSheet,
    View,
    SafeAreaView,
    FlatList,
  } from "react-native";

import { RestaurantsContext } from "../../../services/restaurants/restaurants.context";

export const RestaurantScreen = () => {

  const [searchQuery, setSearchQuery] = React.useState("");
  const onChangeSearch = (query) => setSearchQuery(query);

  const {isLoading, error, restaurants} = useContext(RestaurantsContext);

  return(
  <SafeAreaView style={styles.container}>
    <View style={styles.search}>
      <Searchbar
        placeholder="Search"
        onChangeText={onChangeSearch}
        value={searchQuery}
      />
    </View>
    <FlatList 
      data={restaurants}
      renderItem={({item}) =>{
      console.log(item);
      return(
       <RestaurantInfoCard restaurant={item}/>
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
  });