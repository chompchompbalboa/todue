//-----------------------------------------------------------------------------
// Imports
//-----------------------------------------------------------------------------
import React from 'react'
import { useDispatch } from 'react-redux'
import styled from 'styled-components/native'

import { updateUser } from '@/state/user/actions'

//-----------------------------------------------------------------------------
// Component
//-----------------------------------------------------------------------------
const Login = () => {

  const dispatch = useDispatch()
  
  return (
    <TouchableContainer
      onPress={() => dispatch(updateUser({ id: 'LOCAL_USER' }))}>
      <StyledText
        testID="LoginSkip">
        Continue without logging in
      </StyledText>
    </TouchableContainer>
  )
}

//-----------------------------------------------------------------------------
// Styled Components
//-----------------------------------------------------------------------------
const TouchableContainer = styled.TouchableWithoutFeedback`
`

const StyledText = styled.Text`
  font-size: 16px;
`

export default Login
