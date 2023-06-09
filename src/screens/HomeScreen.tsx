import React from 'react';
import {View, Text, Button} from 'react-native';
import HorizontalScrollList from '../components/HorizontalScrollList';
import SearchBar  from '../components/SearchBar';
import ListItem from '../components/ListItem';

export default function HomeScreen(props: any) {
  const {navigation} = props;

  const goToDetails = () => {
    navigation.navigate('Details');
  };

  return (
    <View>
      <Text>Home Screen</Text>
      <SearchBar />
      <ListItem />
      <HorizontalScrollList />
      <HorizontalScrollList />
      <Button onPress={goToDetails} title="Go to details" />
    </View>
  );
}
