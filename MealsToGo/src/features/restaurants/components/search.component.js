import React, {useState, useContext} from 'react';
import { LocationContext } from '../../../services/location/location.context';
import { Searchbar } from 'react-native-paper';
import {
    StyleSheet,
    View,
     } from "react-native";

export const Search = () => {
    const {keyword, search} = useContext (LocationContext);
    const [searchKeyword, setSearchKeyword] = useState(keyword);


    return (
    <View style={styles.search}>
      <Searchbar
        placeholder="Search for a location"
        value={searchKeyword}
        onSubmitEditing={() => {
            search(searchKeyword);
        }}
        onChangeText={(text) => {
            setSearchKeyword(text);
        }}
      />
    </View>
    )
};

const styles = StyleSheet.create({
    search: {
      padding: 16,
    },
  });