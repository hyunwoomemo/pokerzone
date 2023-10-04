import React from 'react'
import { Text, View } from 'react-native'
import Layout from '../components/Layout'

const Profile = () => {
  return (
    <Layout><Text>Profile</Text></Layout>
  )
}

Profile.navigationOptions = {
  tabBarVisible: true,
}

export default Profile