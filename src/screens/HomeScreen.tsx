import React from 'react';
import {View, Text, Button} from 'react-native';
import HorizontalScrollList from '../components/HorizontalScrollList';

export default function HomeScreen(props: any) {
  const {navigation} = props;

  const goToDetails = () => {
    navigation.navigate('Details');
  };

  return (
    <View>
      <Text>Home Screen</Text>
      <Button onPress={goToDetails} title="Go to details" />
      <HorizontalScrollList />
    </View>
  );
}
