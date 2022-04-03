import React, {useContext} from 'react';
import {AntDesign} from "@expo/vector-icons"
import { FavouritesContext } from '../../services/favourites/favourites.context';
import { TouchableOpacity, StyleSheet } from 'react-native';

export const Favourite = ({restaurant}) => {
    const {favourites, addToFavourites, removeFromFavourites} = useContext(FavouritesContext);

    const isFavourite = favourites.find((r) => r.placeId === restaurant.placeId);

    return(
        <TouchableOpacity style={styles.favouritebtn}
            onPress={() => !isFavourite ? addToFavourites(restaurant) : removeFromFavourites(restaurant)}
        >
            <AntDesign
                name={isFavourite ? "heart" : "hearto"}
                size={28}
                color={isFavourite ? 'red' : 'white'}
            />
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
favouritebtn:{
    position: 'absolute',
    top: 25,
    right: 25,
    zIndex : 9,
}
});