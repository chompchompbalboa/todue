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

  const [ activeForm, setActiveForm ] = useState('REGISTER' as 'REGISTER' | 'LOGIN')

  return (
    <Container>
      <Forms>
        {activeForm === 'LOGIN' && <AuthenticationLogin />}
        {activeForm === 'REGISTER' && <AuthenticationRegister />}
      </Forms>
      <AuthenticationChooseActiveForm
        activeForm={activeForm}
        setActiveForm={setActiveForm}/>
    </Container>
  )
}

//-----------------------------------------------------------------------------
// Styled Components
//-----------------------------------------------------------------------------
const Container = styled.View`
`

const Forms = styled.View`
  padding: 24px;
  border-bottom-left-radius: 6px;
  border-bottom-right-radius: 6px;
`

export default Authentication
