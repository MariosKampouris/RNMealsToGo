import React, {useContext, useState, useEffect} from 'react';
import { Text } from 'react-native';
import MapView from 'react-native-maps';
import {StyleSheet} from 'react-native';
import { Search } from './components/search.map.component';

import { LocationContext } from '../../../services/location/location.context';
import { RestaurantsContext } from '../../../services/restaurants/restaurants.context';



export const MapScreen = () => {
    const {location} = useContext(LocationContext);
    const {restaurants = []} = useContext(RestaurantsContext);

    const [latDelta, setLatDelta] = useState(0);

    const {lat, lng, viewport} = location;
   
    useEffect(()=>{
        const northeastLat = viewport.northeast.lat;
        const southwestLat = viewport.southwest.lat;

        setLatDelta(northeastLat - southwestLat);

    }, [location. viewport]);

    return(
        <>
            <Search/>
            <MapView style={styles.map}
                    region={{
                    latitude: lat,
                    longitude: lng,
                    latitudeDelta: latDelta,
                    longitudeDelta: 0.02,
                }}>
                {restaurants.map((restaurant) => {
                    return null;
                })}
            </MapView>
        </>
    )
}


const styles = StyleSheet.create({
    map : {
        height : "100%",
        width : "100%",
    },
});