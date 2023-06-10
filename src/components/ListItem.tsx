import React from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {ListItemProps} from '../interfaces/interfaces';

const ListItem: React.FC<ListItemProps> = ({image, title, index}) => {
  const navigation = useNavigation();
  const handlePress = () => {
    navigation.navigate('Details', {
      index,
    });
  };
  return (
    <TouchableOpacity onPress={handlePress} style={styles.touchable}>
      <View style={styles.container}>
        <View style={styles.imageContainer}>
          <Image source={{uri: image}} style={styles.image} />
        </View>

        <View style={styles.textContainer}>
          <Text style={styles.title}>{title}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  touchable: {
    padding: 0,
    margin: 0,
    width: '100%',
    height: '100%',
  },
  container: {
    flexDirection: 'column',
    height: '100%',
  },
  imageContainer: {
    height: '80%',
    width: '100%',
    justifyContent: 'flex-start',
  },
  image: {
    width: '100%',
    height: '100%',
    borderRadius: 5,
  },
  textContainer: {
    height: '20%',
    marginTop: 5,
  },
  title: {
    borderColor: '#d01b65',
    fontSize: 14,
    marginLeft: 5,
  },
  subtitle: {
    fontSize: 14,
    color: 'gray',
  },
});

export default ListItem;
