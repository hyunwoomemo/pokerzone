import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { BLACK_COLOR } from '../colors';
import { MyDrawer } from './Drawer';

const Nav = createNativeStackNavigator();

const InNav = () => <Nav.Navigator
screenOptions={{
  // presentation: "modal",
  headerTintColor: "white",
  headerStyle: {
    backgroundColor: BLACK_COLOR
  }
}}
>
  <Nav.Screen name='Drawer' component={MyDrawer}/>
</Nav.Navigator>

export default InNav