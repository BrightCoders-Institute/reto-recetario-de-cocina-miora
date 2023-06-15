import React from 'react';
import { render } from '@testing-library/react-native';
import IngredientsList from '../src/components/IngredientsList';

describe('Ingredient list component', () => {
    it('render correctly', () => {
        const data = {
            info: 'Data example',
            ingredients: [
                {
                    'ingredient': 'arroz cocido',
                    'quantity': '3 tazas',
                },
                {
                    'ingredient': 'Qeso panela rallado',
                    'quantity': '1/2 Taza',
                },
                {
                    'ingredient': 'Ramas de perejil',
                    'quantity': '4 pcs',
                },
                {
                    'ingredient': 'Chile serrano ',
                    'quantity': '1/2 pcs',
                },
            ],
        };

        const {getByText} = render(<IngredientsList info={data.info} ingredients={data.ingredients} />);
        const titleElement = getByText('Ingredients');
        const subTitleElement = getByText(data.info);
        const ingredientElements = data.ingredients.map(item =>
            getByText(item.ingredient)
        );
        const quantityElements = data.ingredients.map(item =>
            getByText(item.quantity)
        );

        expect(titleElement).toBeTruthy();
        expect(subTitleElement).toBeTruthy();
        expect(ingredientElements.length).toBe(data.ingredients.length);
        expect(quantityElements.length).toBe(data.ingredients.length);
    });
});
