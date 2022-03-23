import React from "react";
import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import { Searchbar } from "react-native-paper";
import { RestaurantInfoCard } from "../components/restaurant-info-card.component";
import {
    StyleSheet,
    View,
    SafeAreaView,
    FlatList,
  } from "react-native";
import { theme } from "../../../infrastructure/theme";

export const RestaurantScreen = () => {
  const [searchQuery, setSearchQuery] = React.useState("");

  const onChangeSearch = (query) => setSearchQuery(query);

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
      data={[{name: 1}, {name : 2}, {name: 3}, {name : 4}, {name: 5}, {name : 6}, {name: 7}, {name : 8}]}
      renderItem={() => <RestaurantInfoCard/>}
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