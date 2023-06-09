import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { StyleSheet, TouchableNativeFeedback, View, Text } from 'react-native';
import Icon from 'react-native-vector-icons/EvilIcons';



export const CloseButton = () => {

  const closeIcon = <Icon name="close" size={40} color="white" />;
  const navigation = useNavigation();

  return (
    <View
      style={styles.fab}>
      <TouchableNativeFeedback
        onPress={() => navigation.goBack()}
        background={TouchableNativeFeedback.Ripple('ligthgray', false, 30)}
      >
        <View style={styles.fab}>
          <Text style={styles.closeText}> {closeIcon} </Text>
        </View>
      </TouchableNativeFeedback>

    </View>
  );
};

const styles = StyleSheet.create({
  fab: {
    position: 'absolute',
    width: 60,
    height: 60,
    borderRadius: 100,
    justifyContent: 'center',
    shadowColor: '#000',
    zIndex: 2,
    left: 5,
  },

  closeText: {
    color: 'white',
    fontSize: 25,
    fontWeight: 'bold',
    alignSelf: 'center',
  },
});
