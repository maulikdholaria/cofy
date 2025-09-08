import 'react-native-gesture-handler';
import React from 'react';
import {
  SafeAreaView,
  StatusBar,
  LogBox
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './screen/home/home';
import MapScreen from './screen/map/map_screen';
import CoffeeShopDetail from './screen/map/coffee_shop_detail';

// Disable Hermes to fix codegenNativeCommands error
LogBox.ignoreLogs([
  "0, _reactNative.codegenNativeCommands is not a function",
]);

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <SafeAreaView style={{ flex: 1, backgroundColor: '#FFFFFF' }}>
        <StatusBar barStyle="dark-content" backgroundColor="#ffffff" />
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="MapScreen" component={MapScreen} />
          <Stack.Screen name="CoffeeShopDetail" component={CoffeeShopDetail} />
        </Stack.Navigator>
      </SafeAreaView>
    </NavigationContainer>
  );
};

export default App;