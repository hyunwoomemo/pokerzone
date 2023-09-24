import React from 'react'
import Header from './Header'
import { View } from 'react-native'
import styled from 'styled-components/native'

const Container = styled.View`
  flex: 1;
  margin-top: 30px;
`

const Layout = ({children, toggleDrawer}) => {
  return (
    <Container>
      <Header toggleDrawer={toggleDrawer} />
    {children}
    </Container>
  )
}

export default Layout