import React from 'react';
import { TextInput, StyleSheet, View } from 'react-native';
import { SearchBarProps } from '../interfaces/interfaces';

const SearchBar: React.FC<SearchBarProps> = ({
  value,
  onChangeText,
  placeholder,
}) => {
  return (
<<<<<<< HEAD
    <TextInput
      style={styles.input}
      value=''
      onChangeText={onChangeText}
      placeholder='Search'
    />
=======
    <View>
      <TextInput
        style={styles.input}
        value={value}
        onChangeText={onChangeText}
        placeholder={placeholder}
      />
    </View>
>>>>>>> 2041c2709e8de10a996639c207e6dd23ec011ee6
  );
};

const styles = StyleSheet.create({
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    paddingHorizontal: 10,
<<<<<<< HEAD
    borderRadius: 40,
    margin: 10,
=======
    marginHorizontal: 10,
    borderRadius: 20,
>>>>>>> 2041c2709e8de10a996639c207e6dd23ec011ee6
  },
});

export default SearchBar;
