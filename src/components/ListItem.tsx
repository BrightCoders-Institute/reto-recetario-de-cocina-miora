import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { ListItemProps } from '../interfaces/interfaces';

const ListItem: React.FC<ListItemProps> = ({ image, title, index }) => {
  const navigation = useNavigation();
  const handlePress = () => {
    navigation.navigate('Details', {
      index,
    });
  };
  return (
    <TouchableOpacity onPress={handlePress}>
      <View style={styles.container}>
        <View style={styles.imageContainer}>
          <Image
            source={{ uri: image }}
            style={styles.image} />
        </View>

        <View style={styles.textContainer}>
          <Text style={styles.title}>{title}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
  },
  imageContainer: {
    height: 140,
    justifyContent: 'flex-start',
  },
  image: {
    width: 130,
    height: '100%',
    borderRadius: 5,
  },
  textContainer: {
    height: 35,
    marginTop: 5,
  },
  title: {
    borderColor: '#d01b65',
    fontSize: 14,
  },
  subtitle: {
    fontSize: 14,
    color: 'gray',
  },
});

export default ListItem;
