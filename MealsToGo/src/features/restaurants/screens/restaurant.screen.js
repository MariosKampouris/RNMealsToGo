import React from "react";
import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import { Searchbar } from "react-native-paper";
import { RestaurantInfoCard } from "../components/restaurant-info-card.component";
import {
    StatusBar,
    StyleSheet,
    Text,
    View,
    SafeAreaView,
    Platform,
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

    <View style={styles.list}>
      <RestaurantInfoCard/>
    </View>

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
    list: {
      flex: 1,
      padding: 16,
    },
  });