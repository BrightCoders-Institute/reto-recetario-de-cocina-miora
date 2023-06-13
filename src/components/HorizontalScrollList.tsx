import React from 'react';
import {ScrollView, View, StyleSheet, Text} from 'react-native';
//import recipes from '../data/recipes.json';
import ListItem from './ListItem';
import {Recipe} from '../types/Recipes';

const HorizontalScrollList = ({
  title,
  widthItem,
  heightItem,
  data,
}: {
  title: string;
  widthItem: number;
  heightItem: number;
  data: Recipe;
}) => {
  const styles = StyleSheet.create({
    horizontalScrollList: {
      marginHorizontal: 5,
      marginBottom: 10,
    },
    item: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      width: widthItem,
      height: heightItem,
      marginHorizontal: 5,
    },
    titleText: {
      fontSize: 20,
      textTransform: 'uppercase',
      marginHorizontal: 15,
      marginVertical: 10,
      color: '#d01b65',
    },
  });
  return (
    <View>
      <Text style={styles.titleText}>{title}</Text>
      <ScrollView horizontal style={styles.horizontalScrollList}>
        {data.map((recipe, index) => (
          <View style={styles.item} key={index}>
            <ListItem
              key={index}
              image={recipe.imgUrl}
              title={recipe.name}
              index={recipe._id}
            />
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

<<<<<<< HEAD
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
    margin:10,
  },
  titleText: {
    fontSize: 20,
    textTransform: 'uppercase',
    marginHorizontal: 15,
    marginVertical: 10,
    color: '#d01b65',
  },
});

=======
>>>>>>> aeabb93703920cfbff8124878908f3a7b73ea2a2
export default HorizontalScrollList;
