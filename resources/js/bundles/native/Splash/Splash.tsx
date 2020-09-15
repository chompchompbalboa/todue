//-----------------------------------------------------------------------------
// Imports
//-----------------------------------------------------------------------------
import React from 'react'
import styled from 'styled-components/native'

import Authentication from '@native/Authentication/Authentication'
import { KeyboardAvoidingView } from 'react-native'
import { MaterialCommunityIcons } from '@expo/vector-icons'; 

//-----------------------------------------------------------------------------
// Component
//-----------------------------------------------------------------------------
export const Splash = () => {

  return (
    <KeyboardAvoidingView
      // @ts-ignore
      behavior={Platform.OS == "ios" ? "padding" : "height"}>
      <Container>
        <Content>
          <MaterialCommunityIcons name="check-bold" size={24} color="black" />
          <Logo>
            QuickDo
          </Logo>
        </Content>
        <Authentication />
      </Container>
    </KeyboardAvoidingView>
  )
}

//-----------------------------------------------------------------------------
// Styled Components
//-----------------------------------------------------------------------------
const Container = styled.View`
  height: 100%;
  justify-content: center;
`

const Content = styled.View`
  flex-direction: row;
  justify-content: center;
  align-items: center;
`

const Logo = styled.Text`
  margin-left: 4px;
  font-size: 24px;
  font-family: OpenSans_700Bold;
`

export default Splash
