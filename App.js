import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import styled from 'styled-components/native'
import Root from './navigator/Root';
import { NavigationContainer } from '@react-navigation/native';
import 'react-native-gesture-handler';
import { MyDrawer } from './navigator/Drawer';
import Layout from './components/Layout';

const Container = styled.View``

export default function App() {
  return (
    <>
      <StatusBar style='dark' />
      <NavigationContainer>
          <MyDrawer />
      </NavigationContainer>
    </>
  );
}

