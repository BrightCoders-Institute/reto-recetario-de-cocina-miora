import React from 'react';
import {Text, Image, StyleSheet, ScrollView} from 'react-native';
import recipes from '../data/recipes.json';
import IngredientsList from '../components/IngredientsList';

export default function DetailsScreen({route}: any) {

  const {index} = route.params;
  const {name, ingredients, imgUrl, category, aditionalInfo} = recipes.recipes[index];

  console.log(route.params);
  return (
    <ScrollView>
      <Text>{name}</Text>
      <Text>{category}</Text>
      <Text>{aditionalInfo}</Text>
      <Image source={{uri: imgUrl}} style={styles.image} />

      <IngredientsList info={aditionalInfo} ingredients={ingredients}/>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  image: {
    width: 'auto',
    height: 400,
  },
});
