import React from 'react';
import { ScrollView } from 'react-native';
import { List } from 'react-native-paper';

export const AccordionDetail = () => {
    const [breakfastExpanded, setbreakfastExpanded] = React.useState(false);
    const [lunchExpanded, setlunchExpanded] = React.useState(false);
    const [dinnerExpanded, setdinnerExpanded] = React.useState(false);
    const [drinksExpanded, setdrinksExpanded] = React.useState(false);

    const breakfasthandlePress = () => setbreakfastExpanded(!breakfastExpanded);
    const lunchhandlePress = () => setlunchExpanded(!lunchExpanded);
    const dinnerhandlePress = () => setdinnerExpanded(!dinnerExpanded);
    const drinkshandlePress = () => setdrinksExpanded(!drinksExpanded);

    return(
        <>
        <ScrollView>
        <List.Accordion
          title="Breakfast"
          left={props => <List.Icon {...props} icon="cupcake" />}
          expanded={breakfastExpanded}
          onPress={breakfasthandlePress}>
          <List.Item title="Pancakes" />
          <List.Item title="Brioche" />
          <List.Item title="Muffins" />
        </List.Accordion>
        <List.Accordion
          title="Lunch"
          left={props => <List.Icon {...props} icon="hamburger" />}
          expanded={lunchExpanded}
          onPress={lunchhandlePress}>
          <List.Item title="Ravioli" />
          <List.Item title="Schnitzel" />
          <List.Item title="Ceasar's" />
        </List.Accordion>
        <List.Accordion
          title="Dinner"
          left={props => <List.Icon {...props} icon="pizza" />}
          expanded={dinnerExpanded}
          onPress={dinnerhandlePress}>
          <List.Item title="Deluxe Pizza" />
          <List.Item title="Special Golden Burger" />
          <List.Item title="Miso Noodles" />
        </List.Accordion>
        <List.Accordion
          title="Drinks"
          left={props => <List.Icon {...props} icon="cup" />}
          expanded={drinksExpanded}
          onPress={drinkshandlePress}>
          <List.Item title="Coca Cola" />
          <List.Item title="Sprite" />
          <List.Item title="Orange Juice" />
        </List.Accordion>
        </ScrollView>
      </>
    );
};