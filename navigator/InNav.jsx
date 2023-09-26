import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { MyDrawer } from './Drawer';

const Nav = createNativeStackNavigator();

const InNav = () => <Nav.Navigator
screenOptions={{
  // presentation: "modal",
  headerTintColor: "white",
}}
>
  <Nav.Screen name='Drawer' component={MyDrawer}/>
</Nav.Navigator>

export default InNav