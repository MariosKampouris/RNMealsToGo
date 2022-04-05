import React, {useState, useContext, useEffect} from 'react';
import { LocationContext } from '../../../services/location/location.context';
import { Searchbar } from 'react-native-paper';
import {
    StyleSheet,
    View,
     } from "react-native";

export const Search = ({isFavouritesToggled, onFavouritesToggle}) => {
    const {keyword, search} = useContext (LocationContext);
    const [searchKeyword, setSearchKeyword] = useState(keyword);

    useEffect(() => {
      setSearchKeyword(keyword);
  }, [keyword]);

    return (
    <View style={styles.search}>
      <Searchbar
        icon={isFavouritesToggled ? 'heart' : 'heart-outline'}
        onIconPress={onFavouritesToggle}
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