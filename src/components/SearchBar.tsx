import React, {useState} from 'react';
import {TextInput, StyleSheet, View, useColorScheme} from 'react-native';
import {SearchBarProps} from '../interfaces/interfaces';
import data from '../data/recipes.json';

const SearchBar: React.FC<SearchBarProps> = ({handleSearch, placeholder}) => {
  const theme = useColorScheme();
  const [value, setValue] = useState('');

  const styles = StyleSheet.create({
    input: {
      height: 40,
      borderColor: 'gray',
      borderWidth: 1,
      paddingHorizontal: 10,
      marginHorizontal: 10,
      borderRadius: 20,
      color: theme === 'dark' ? 'white' : 'black',
    },
    container: {
      marginTop: 10,
    },
  });

  const handleTextChange = (text: string) => {
    setValue(text);
    let filteredRecipes = data.recipes;
    if (text.length > 0) {
      filteredRecipes = data.recipes.filter(recipe => {
        return recipe.name.toLowerCase().includes(text.toLowerCase());
      });
    }
    handleSearch(filteredRecipes);
  };
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        onChangeText={handleTextChange}
        value={value}
        placeholder={placeholder}
        placeholderTextColor={theme === 'dark' ? 'white' : 'black'}
      />
    </View>
  );
};

export default SearchBar;
