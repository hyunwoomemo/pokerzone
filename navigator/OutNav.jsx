import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from '../screens/Login';
import Join from '../screens/Join';
import { BLACK_COLOR } from '../color';
import { MyDrawer } from './Drawer';

const Nav = createNativeStackNavigator();

const OutNav = () => <Nav.Navigator
  screenOptions={{
    // presentation: "modal",
    headerTintColor: "white",
    headerStyle: {
      backgroundColor: BLACK_COLOR
    },
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