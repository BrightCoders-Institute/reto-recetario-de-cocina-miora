import Ingredient from './Ingredient';

interface Recipe {
  name: string;
  ingredients: Ingredient[];
  imgUrl: string;
  category: string;
  aditionalInfo: string;
}

export default Recipe;
