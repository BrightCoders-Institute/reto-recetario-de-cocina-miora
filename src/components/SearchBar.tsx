import React from 'react';
import {TextInput, StyleSheet} from 'react-native';
import {SearchBarProps} from '../interfaces/interfaces';

const SearchBar: React.FC<SearchBarProps> = ({
  value,
  onChangeText,
  placeholder,
}) => {
  return (
    <TextInput
      style={styles.input}
      value=''
      onChangeText={onChangeText}
      placeholder='Search'
    />
  );
};

const styles = StyleSheet.create({
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    paddingHorizontal: 10,
    borderRadius: 40,
    margin: 10,
  },
});

export default SearchBar;
