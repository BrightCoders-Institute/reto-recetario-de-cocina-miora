import { View, Text, StyleSheet } from 'react-native';
import React from 'react';

export default function IngredientsList({info, ingredients}:any) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Ingredients</Text>
      <Text style={styles.subTitle}>{info}</Text>

    {ingredients.map((item, index) => (
      <View key={index} style={styles.listContainer}>
        <Text style={styles.listItem}>{item.ingredient}</Text>
        <Text style={styles.listItem}>{item.quantity}</Text>
      </View>
    ))}

    </View>
  );
}

const styles = StyleSheet.create({
  title: {
    fontSize: 24,
  },
  subTitle: {
    fontSize: 16,
    marginBottom: 20,
  },
  container: {
    marginTop: 10,
    marginBottom: 30,
    marginHorizontal: 15,
  },
  listContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 20,
    borderBottomColor: '#f2f2f2',
    borderBottomWidth: 1,
  },
  listItem: {
    textTransform: 'capitalize',
    fontSize: 14,
  },
});
