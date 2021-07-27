import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import General from '../Screens/FAQ/General';
import Safety from '../Screens/FAQ/Safety';
import Product from '../Screens/FAQ/Product';
import Fees from '../Screens/FAQ/Fees';
import Home from '../Screens/Home';
import Report from '../Screens/Report';
import Suggest from '../Screens/Suggest';

const Stack = createStackNavigator();

const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
        initialRouteName={'home'}>
        <Stack.Screen name="home" component={Home} />
        <Stack.Screen name="faq" component={General} />
        <Stack.Screen name="safety" component={Safety} />
        <Stack.Screen name="product" component={Product} />
        <Stack.Screen name="fees" component={Fees} />
        <Stack.Screen name="report" component={Report} />
        <Stack.Screen name="suggest" component={Suggest} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
