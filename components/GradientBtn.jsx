import React from 'react'
import {LinearGradient} from 'expo-linear-gradient'

const GradientBtn = ({children}) => {
  return (
    <LinearGradient colors={['#fe806a', '#ff3183']} start={{ x: 0.3, y: 0.1 }} style={{ borderRadius: 30 }} end={{ x: 0.9, y: 0.1 }}>
      {children}
    </LinearGradient>
  )
}

export default GradientBtn