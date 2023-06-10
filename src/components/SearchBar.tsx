import React from 'react';
import {TextInput, StyleSheet, View, useColorScheme} from 'react-native';
import {SearchBarProps} from '../interfaces/interfaces';

const SearchBar: React.FC<SearchBarProps> = ({
  value,
  onChangeText,
  placeholder,
}) => {
  const theme = useColorScheme();

  const styles = StyleSheet.create({
    input: {
      height: 40,
      borderColor: 'gray',
      borderWidth: 1,
      paddingHorizontal: 10,
      marginHorizontal: 10,
      borderRadius: 20,
      color: theme === 'dark' ? 'white' : 'black',
    },
  });

  return (
    <View>
      <TextInput
        style={styles.input}
        value={value}
        onChangeText={onChangeText}
        placeholder={placeholder}
        placeholderTextColor={theme === 'dark' ? 'white' : 'black'}
      />
    </View>
  );
};

export default SearchBar;
