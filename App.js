import React from 'react';
import {StatusBar, useColorScheme} from 'react-native';
import {NativeBaseProvider} from 'native-base';
import Navigation from './src/Navigation';

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';
  return (
    <NativeBaseProvider>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <Navigation />
    </NativeBaseProvider>
  );
};

export default App;
