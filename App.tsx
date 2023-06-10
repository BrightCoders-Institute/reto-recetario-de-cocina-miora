/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {
  DarkTheme,
  DefaultTheme,
  NavigationContainer,
} from '@react-navigation/native';
import Navigation from './src/navigation/Navigation';
import {useColorScheme} from 'react-native';

function App(): JSX.Element {
  const theme = useColorScheme();

  return (
    <NavigationContainer theme={theme === 'dark' ? DarkTheme : DefaultTheme}>
      <Navigation />
    </NavigationContainer>
  );
}

export default App;
