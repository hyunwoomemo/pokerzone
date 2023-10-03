// import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, SafeAreaView, Platform, StatusBar } from 'react-native';
import styled from 'styled-components/native'
import Root from './navigator/Root';
import { NavigationContainer } from '@react-navigation/native';
import 'react-native-gesture-handler';
import { MyDrawer } from './navigator/Drawer';
import Layout from './components/Layout';
import OutNav from './navigator/OutNav';
import { QueryClientProvider, QueryClient } from 'react-query';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
// import * as SplashScreen from 'expo-splash-screen'

// SplashScreen.preventAutoHideAsync();

const queryClient = new QueryClient()

const Nav = createNativeStackNavigator()

export default function App() {
  
  // const [ready, setReady] = useState(false);
  
  console.log(StatusBar.currentHeight)

  return (
    <QueryClientProvider client={queryClient}>
      <StatusBar barStyle='dark-content' backgroundColor='#ebf2f0'/>
      <SafeAreaView style={Platform.OS === 'android' ? { flex: 1,  backgroundColor: '#ebf2f0' } : { flex: 1, paddingTop: 0, backgroundColor: '#ebf2f0' }}>
        <NavigationContainer>
          <Nav.Navigator>
            <Nav.Screen name='OutNav' component={OutNav} options={{headerShown: false}}/>
          {/* <OutNav /> */}
          </Nav.Navigator>
        </NavigationContainer>
      </SafeAreaView>
    </QueryClientProvider>
  );
}

