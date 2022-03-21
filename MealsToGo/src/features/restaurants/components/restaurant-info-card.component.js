import React from "react";
import { Text, StyleSheet, View } from "react-native";
import { Card } from "react-native-paper";
import { theme } from "../../../infrastructure/theme/index";

import { SvgXml } from "react-native-svg";
import star from '../../../../assets/star';
import openclosed from "../../../../assets/openclosed";
import { backgroundColor } from "react-native/Libraries/Components/View/ReactNativeStyleAttributes";

export const RestaurantInfoCard = ({restaurant = {}}) => {
const {
name = 'Test Restaurant',
icon,
photos =['https://www.efsyn.gr/sites/default/files/styles/default/public/2019-03/fagito-fast-food.jpg?itok=Jdh9ilvo'] ,
address = "100 Test Street",
isOpenNow = true,
rating = 4.2,
isClosedTemporarily,
} = restaurant;

const ratingArray = Array.from(new Array(Math.floor(rating)));
console.log(ratingArray);

    return(
      <>
        <Card elevation={5} style = {styles.cardstyle}>
            <Card.Cover style={styles.ImageStyle} source={{uri: photos[0]}} />
             <View style={styles.titlewrapper}>
              <Text style={styles.titlestyle}>{name}</Text>
              <View style={styles.sectioncontainer}>
                <View style={styles.stariconwrapper}>
                 {ratingArray.map(() => (
                    <SvgXml style={styles.stariconstyle} xml={star}/>
                 ))}
                  </View>
                 <View style={styles.openclosedwrapper}>
                   {isOpenNow && <SvgXml style={styles.openiconstyle} xml={openclosed}/>}
                 </View>
              </View>
              <Text style={styles.addressstyle}>{address}</Text>
            </View>
        </Card>
      </>
    );
};



const styles = StyleSheet.create({
    cardstyle: {
        backgroundColor: theme.colors.bg.primary,
      },
    ImageStyle: {
      padding: 20,
      backgroundColor: theme.colors.bg.primary,
    },
    titlestyle: {
        fontFamily: theme.fonts.heading,
        fontSize: 20,
        color: theme.colors.ui.primary,
      },
      titlewrapper:{
        padding: 16
      },
      addressstyle: {
        fontFamily: theme.fonts.body,
        fontSize: 16,
        color: theme.colors.ui.primary,
      },
      stariconstyle: {
        width:20,
        height:20
      },
      stariconwrapper: {
        flexDirection: 'row',
        paddingTop: 8,
        paddingBottom: 5,
      },
      openiconstyle: {
        width:25,
        height:25,
      },
      openclosedwrapper: {
        flex: 1,
        justifyContent: 'flex-end',
        flexDirection: 'row'
      },
      sectioncontainer:{
          alignItems: 'center',
          flexDirection: 'row',
      }
  });
  