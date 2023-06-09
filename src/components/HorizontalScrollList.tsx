import React from 'react';
import { ScrollView, View, StyleSheet, Text } from 'react-native';

const HorizontalScrollList = () => {
  return (
    <ScrollView horizontal>
      <Text>Items</Text>
      <View style={styles.item}>
        <Text>Pizza</Text>
      </View>
      <View style={styles.item}>
        <Text>Item 2</Text>
      </View>
      <View style={styles.item}>
        <Text>Item 3</Text>
      </View>
      {/* Agrega más elementos según sea necesario */}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  item: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: 200,
    height: 200,
    marginHorizontal: 10,
    backgroundColor: 'lightgray',
  },
});

export default HorizontalScrollList;
