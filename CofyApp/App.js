import React from 'react';
import {
  SafeAreaView,
  StatusBar,
} from 'react-native';
import Home from './screen/home/home';

const App = () => {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#FFFFFF' }}>
      <StatusBar barStyle="dark-content" backgroundColor="#ffffff" />
      <Home />
    </SafeAreaView>
  );
};

export default App;