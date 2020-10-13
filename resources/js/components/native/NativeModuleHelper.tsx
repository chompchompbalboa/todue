//-----------------------------------------------------------------------------
// Imports
//-----------------------------------------------------------------------------
import React from 'react'
import styled from 'styled-components/native'

import QuickDoTextInput from '@/components/native/QuickDoTextInput'

//-----------------------------------------------------------------------------
// Component
//-----------------------------------------------------------------------------
const AppRoot = () => {
  return (
    <Container>
      <QuickDoTextInput
        style={{ flex: 1 }} />
    </Container>
  )
}

const Container = styled.View`
  width: 100%;
  height: 100px;
  background-color: rgb(200, 200, 200);
`

export default AppRoot
