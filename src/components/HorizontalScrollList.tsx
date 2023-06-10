import React from 'react';
import { ScrollView, View, StyleSheet, Text } from 'react-native';
import recipes from '../data/recipes.json';
import ListItem from './ListItem';

const HorizontalScrollList = ({ title }: { title: string }) => {
  return (
    <View>
      <Text style={styles.titleText}>{title}</Text>
      <ScrollView horizontal style={styles.horizontalScrollList}>
        {recipes.recipes.map((recipe, index) => (
          <View style={styles.item} key={index}>
            <ListItem
              key={index}
              image={recipe.imgUrl}
              title={recipe.name}
              index={index}
            />
          </View>
        ))}

        {/* Elementos extras*/}
        <View style={styles.item}>
          <Text>Pizza</Text>
        </View>
        <View style={styles.item}>
          <Text>Item 2</Text>
        </View>
        <View style={styles.item}>
          <Text>Item 3</Text>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  horizontalScrollList: {
    marginHorizontal: 5,
    marginBottom: 10,
  },
  item: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: 140,
    height: 180,
    marginHorizontal: 5,
    backgroundColor: 'lightgray',
  },
  titleText: {
    fontSize: 20,
    textTransform: 'uppercase',
    marginHorizontal: 15,
    marginVertical: 10,
    color: '#d01b65',
  },
});

export default HorizontalScrollList;
