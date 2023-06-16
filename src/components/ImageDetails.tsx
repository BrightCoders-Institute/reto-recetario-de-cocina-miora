import React from 'react';
import {Text, Image, StyleSheet, View} from 'react-native';
import {CloseButton} from './CloseButton';
import {ShareButton} from './ShareButton';
import {FavButton} from './FavButton';

interface ImageDetailsProps {
  name: string;
  category: string;
  imgUrl: string;
}

const ImageDetails: React.FC<ImageDetailsProps> = ({
  name,
  category,
  imgUrl,
}) => {
  return (
    <>
      <CloseButton testID="close-button" />
      <ShareButton testID="share-button" />
      <FavButton testID="fav-button" />
      <Text style={styles.textName}>{name}</Text>
      <Text style={styles.textCategory}>{category}</Text>
      <View style={styles.filter} />
      <Image source={{uri: imgUrl}} style={styles.image} />
    </>
  );
};

const styles = StyleSheet.create({
  image: {
    width: 'auto',
    height: 350,
    position: 'relative',
  },
  filter: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    zIndex: 1,
    height: 350,
  },
  textName: {
    position: 'absolute',
    fontSize: 35,
    color: 'white',
    top: 290,
    left: 10,
    zIndex: 2,
    fontWeight: 'bold',
  },
  textCategory: {
    position: 'absolute',
    fontSize: 28,
    color: 'white',
    top: 250,
    left: 10,
    zIndex: 2,
    fontWeight: 'bold',
  },
});

export default ImageDetails;
