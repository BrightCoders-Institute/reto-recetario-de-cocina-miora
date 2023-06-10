import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';
import recipes from '../data/recipes.json';

export default function DetailsScreen({route}: any) {

  const {index} = route.params;
  const {name, ingredients, imgUrl, category, aditionalInfo} = recipes.recipes[index];

  console.log(route.params);
  return (
    <View>
      <Text>{name}</Text>
      {ingredients.map((ingredient, i) => (
          <View key={i}>
            <Text>{ingredient.ingredient}</Text>
            <Text>{ingredient.quantity}</Text>
          </View>
      ))}
      <Text>{category}</Text>
      <Text>{aditionalInfo}</Text>
      <Image source={{uri: imgUrl}} style={styles.image} />
    </View>
  );
}

const styles = StyleSheet.create({
  image: {
    width: 400,
    height: 400,
  },
});
