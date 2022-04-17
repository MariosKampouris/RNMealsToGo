import React from "react";
import { ScrollView } from 'react-native';

import { RestaurantInfoCard } from "../components/restaurant-info-card.component";
import { AccordionDetail } from "../components/detail.accordion.component";

import { SafeAreaView } from "react-native-safe-area-context";

export const RestaurantDetailScreen = ({route}) => {
    const {restaurant} = route.params;
    return(
        <SafeAreaView style={{backgroundColor: '#FFFFFF'}}>
            <ScrollView>
                 <RestaurantInfoCard restaurant={restaurant}/>
                 <AccordionDetail/>
            </ScrollView>
        </SafeAreaView>
    )
};