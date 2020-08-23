//-----------------------------------------------------------------------------
// Imports
//-----------------------------------------------------------------------------
import React, { useState } from 'react'
import styled from 'styled-components/native'

import AuthenticationChooseActiveForm from '@native/Authentication/AuthenticationChooseActiveForm'
import AuthenticationLogin from '@native/Authentication/AuthenticationLogin'
import AuthenticationRegister from '@native/Authentication/AuthenticationRegister'

//-----------------------------------------------------------------------------
// Component
//-----------------------------------------------------------------------------
export const Authentication = () => {

  const [ activeForm, setActiveForm ] = useState('LOGIN' as 'REGISTER' | 'LOGIN')

  return (
    <Container>
      <AuthenticationChooseActiveForm
        activeForm={activeForm}
        setActiveForm={setActiveForm}/>
      <Forms>
        {activeForm === 'LOGIN' && <AuthenticationLogin />}
        {activeForm === 'REGISTER' && <AuthenticationRegister />}
      </Forms>
    </Container>
  )
}

//-----------------------------------------------------------------------------
// Styled Components
//-----------------------------------------------------------------------------
const Container = styled.View`
  padding: 16px;
  color: black;
`

const Forms = styled.View`
  padding: 24px;
  background-color: rgb(230, 230, 230);
  border-bottom-left-radius: 6px;
  border-bottom-right-radius: 6px;
`

export default Authentication
