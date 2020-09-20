//-----------------------------------------------------------------------------
// Imports
//-----------------------------------------------------------------------------
import React, { useState } from 'react'
import styled from 'styled-components/native'
import isEmail from 'validator/lib/isEmail'

import AuthenticationChooseActiveForm from '@native/Authentication/AuthenticationChooseActiveForm'
import AuthenticationInput from '@native/Authentication/AuthenticationInput'
import AuthenticationLogin from '@native/Authentication/AuthenticationLogin'
import AuthenticationRegister from '@native/Authentication/AuthenticationRegister'

//-----------------------------------------------------------------------------
// Component
//-----------------------------------------------------------------------------
export const Authentication = () => {

  // State
  const [ activeForm, setActiveForm ] = useState('REGISTER' as 'REGISTER' | 'LOGIN')
  const [ emailInputValue, setEmailInputValue ] = useState('')
  const [ passwordInputValue, setPasswordInputValue ] = useState('')

  return (
    <Container>
      <Forms>
        <AuthenticationInput
          type="email"
          placeholder="Email..."
          value={emailInputValue}
          onChange={nextValue => setEmailInputValue(nextValue)}
          isInputValueValid={emailInputValue === '' || isEmail(emailInputValue)}/>
        <AuthenticationInput
          type="password"
          placeholder="Password..."
          value={passwordInputValue}
          onChange={nextValue => setPasswordInputValue(nextValue)}
          isInputValueValid={true}/>
        {activeForm === 'LOGIN' && 
          <AuthenticationLogin
            email={emailInputValue}
            password={passwordInputValue}/>}
        {activeForm === 'REGISTER' && 
          <AuthenticationRegister
            email={emailInputValue}
            password={passwordInputValue}/>}
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
