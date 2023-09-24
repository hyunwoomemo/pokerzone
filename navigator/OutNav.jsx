import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from '../screens/Login';
import Join from '../screens/Join';
import { MyDrawer } from './Drawer';

const Nav = createNativeStackNavigator();

const OutNav = () => <Nav.Navigator
  screenOptions={{
    // presentation: "modal",
    headerTintColor: "white",
    headerShown: false
  }}
>
  <Nav.Screen name='Login' component={Login}/>
  <Nav.Screen options={{
    presentation: 'modal'
  }} name='Join' component={Join}/>
  <Nav.Screen name='Drawer' component={MyDrawer}/>
</Nav.Navigator>

export default OutNav