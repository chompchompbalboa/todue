//-----------------------------------------------------------------------------
// Imports
//-----------------------------------------------------------------------------
import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import AsyncStorage from '@react-native-community/async-storage'
import styled from 'styled-components/native'

import { clearLoadedLists } from '@/state/list/actions'
import { updateUser } from '@/state/user/actions'

//-----------------------------------------------------------------------------
// Component
//-----------------------------------------------------------------------------
export const AuthenticationLogin = () => {

  // Redux
  const dispatch = useDispatch()

  // State
  const [ isLoggingOut, setIsLoggingOut ] = useState(false)
  
  // Handle Login Attempt
  const handleLogout = () => {
    setIsLoggingOut(true)
    AsyncStorage.removeItem('@todue/refreshToken')
    AsyncStorage.removeItem('@todue/accessToken').then(() => {
      dispatch(updateUser({ id: null, email: null }))
      dispatch(clearLoadedLists())
    })
  }
  
  return (
    <ContainerTouchable
      onPress={() => handleLogout()}>
      <Container>
        <Logout>
          {isLoggingOut ? 'Logging Out...' : 'Logout'}
        </Logout>
      </Container>
    </ContainerTouchable>
  )
}

//-----------------------------------------------------------------------------
// Styled Components
//-----------------------------------------------------------------------------
const ContainerTouchable = styled.TouchableWithoutFeedback``
const Container = styled.View`
  padding: 20px;
`

const Logout = styled.Text`
  background-color: rgb(200, 0, 0);
  color: white;
  padding: 10px 0;
  font-family: OpenSans_700Bold;
  font-size: 20px;
  text-align: center;
`

export default AuthenticationLogin
