import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, SafeAreaView, Platform } from 'react-native';
import styled from 'styled-components/native'
import Root from './navigator/Root';
import { NavigationContainer } from '@react-navigation/native';
import 'react-native-gesture-handler';
import { MyDrawer } from './navigator/Drawer';
import Layout from './components/Layout';
import OutNav from './navigator/OutNav';
import { QueryClientProvider, QueryClient } from 'react-query';


const queryClient = new QueryClient()

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <StatusBar style='dark' />
      <SafeAreaView style={Platform.OS === 'android' ? { flex: 1, paddingTop: StatusBar.currentHeight, backgroundColor: '#ebf2f0' } : { flex: 1, paddingTop: 0 }}>
        <NavigationContainer>
          <OutNav />
        </NavigationContainer>
      </SafeAreaView>
    </QueryClientProvider>
  );
}

