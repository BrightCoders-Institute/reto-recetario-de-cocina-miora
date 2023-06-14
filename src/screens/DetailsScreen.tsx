import React from 'react';
import { ScrollView } from 'react-native';
import recipes from '../data/recipes.json';
import IngredientsList from '../components/IngredientsList';
import ImageDetails from '../components/ImageDetails';


export default function DetailsScreen({route}: any) {

  const {index} = route.params;
  const {name, ingredients, imgUrl, category, aditionalInfo} = recipes.recipes[index];

  console.log(route.params);
  return (

<>

<ImageDetails name={name} category={category} imgUrl={imgUrl} />
 <ScrollView>
  <IngredientsList info={aditionalInfo} ingredients={ingredients}/>
</ScrollView>
</>
  );
}