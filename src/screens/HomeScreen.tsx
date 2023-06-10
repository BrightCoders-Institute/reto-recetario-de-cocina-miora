import React from 'react';
import {View} from 'react-native';
import HorizontalScrollList from '../components/HorizontalScrollList';
import Searchbar from '../components/SearchBar';

export default function HomeScreen(props: any) {
  const {navigation} = props;

  const goToDetails = () => {
    navigation.navigate('Details');
  };

  const sizeTrending = {width: 140, height: 180};
  const sizeRecent = {width: 180, height: 240};
  return (
    <View>
      <Searchbar placeholder="What do you want to eat?" />
      <HorizontalScrollList
        title="Trending"
        heightItem={sizeTrending.height}
        widthItem={sizeTrending.width}
      />
      <HorizontalScrollList
        title="Recent"
        heightItem={sizeRecent.height}
        widthItem={sizeRecent.width}
      />
    </View>
  );
}
