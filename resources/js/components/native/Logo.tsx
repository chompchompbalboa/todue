//-----------------------------------------------------------------------------
// Imports
//-----------------------------------------------------------------------------
import React from 'react'
import styled from 'styled-components/native'

import { MaterialCommunityIcons } from '@expo/vector-icons'

//-----------------------------------------------------------------------------
// Component
//-----------------------------------------------------------------------------
export const Logo = () => {

  return (
    <Container>
      <MaterialCommunityIcons name="check-bold" size={24} color="black" />
      <Text>
        QuickDo
      </Text>
    </Container>
  )
}

//-----------------------------------------------------------------------------
// Styled Components
//-----------------------------------------------------------------------------
const Container = styled.View`
  flex-direction: row;
  justify-content: center;
  align-items: center;
`

const Text = styled.Text`
  margin-left: 4px;
  font-size: 24px;
  font-family: OpenSans_700Bold;
`

export default Logo
