import React, {useState} from 'react';
import {View} from 'react-native';
import HorizontalScrollList from '../components/HorizontalScrollList';
import SearchBar  from '../components/SearchBar';
import ListItem from '../components/ListItem';
import Searchbar from '../components/SearchBar';
import data from '../data/recipes.json';
import {Recipe} from '../types/Recipes';

export default function HomeScreen() {
  const [dataToShow, setDataShow] = useState(data.recipes);
  const trendingData = dataToShow.filter(recipe => {
    return recipe.category === 'Trending';
  });
  const recentData = dataToShow.filter(recipe => {
    return recipe.category === 'Recent';
  });

  const sizeTrending = {width: 140, height: 180};
  const sizeRecent = {width: 180, height: 240};

  const handleSearch = (search: Recipe) => {
    setDataShow(search);
  };

  return (
    <View>
      <Searchbar
        placeholder="What do you want to eat?"
        handleSearch={handleSearch}
      />
      <HorizontalScrollList
        title="Trending"
        heightItem={sizeTrending.height}
        widthItem={sizeTrending.width}
        data={trendingData}
      />
      <HorizontalScrollList
        title="Recent"
        heightItem={sizeRecent.height}
        widthItem={sizeRecent.width}
        data={recentData}
      />
    </View>
  );
}
