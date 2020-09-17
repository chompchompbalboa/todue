//-----------------------------------------------------------------------------
// Imports
//-----------------------------------------------------------------------------
import React, { useState } from 'react'
import styled from 'styled-components/native'
import isEmail from 'validator/lib/isEmail'

import { action } from '@/api'

import AuthenticationButton from '@native/Authentication/AuthenticationButton'
import AuthenticationInput from '@native/Authentication/AuthenticationInput'
import AuthenticationStatus from '@native/Authentication/AuthenticationStatus'

//-----------------------------------------------------------------------------
// Component
//-----------------------------------------------------------------------------
export const AuthenticationRegister = () => {
  
  // State
  const [ emailInputValue, setEmailInputValue ] = useState('')
  const [ passwordInputValue, setPasswordInputValue ] = useState('')
  const [ registerStatus, setRegisterStatus ] = useState('READY' as IRegisterStatus)
  
  // Handle Register Attempt
  const handleRegisterAttempt = () => {
    setRegisterStatus('REGISTERING')
    if(emailInputValue === '' || passwordInputValue === '') {
      setTimeout(() => {
        setRegisterStatus('NOT_ALL_FIELDS_ARE_COMPLETE')
      }, 500)
    }
    else if(!isEmail(emailInputValue)) {
      setTimeout(() => {
        setRegisterStatus('NOT_VALID_EMAIL')
      }, 500)
    }
    else {
      action.userRegister(emailInputValue, passwordInputValue)
        .then(() => {
          window.location.reload()
        })
        .catch(error => {
          if(error.response.status === 409) {
            setTimeout(() => {
              setRegisterStatus('EMAIL_ALREADY_IN_USE')
            }, 500)
          }
          else {
            setTimeout(() => {
              setRegisterStatus('ERROR_DURING_REGISTRATION')
            }, 500)
          }
        })
    }
  }
  
  return (
    <RegisterForm>
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
      <AuthenticationButton
        handleButtonPress={handleRegisterAttempt}
        text={!['REGISTERING'].includes(registerStatus) ? 'Create New Account' : 'Creating...'} />
      <AuthenticationStatus
        status={AuthenticationRegisterStatusMessages[registerStatus]}/> 
    </RegisterForm>
  )
}

//-----------------------------------------------------------------------------
// Types
//-----------------------------------------------------------------------------
type IRegisterStatus = 
  'READY' | 
  'REGISTERING' | 
  'NOT_ALL_FIELDS_ARE_COMPLETE' |
  'NOT_VALID_EMAIL' |
  'EMAIL_ALREADY_IN_USE' |
  'ERROR_DURING_REGISTRATION'
  
// Status Messages
export const AuthenticationRegisterStatusMessages = {
  READY: "",
  REGISTERING: "",
  NOT_ALL_FIELDS_ARE_COMPLETE: "Please enter your email and password to create an account",
  NOT_VALID_EMAIL: "Please enter a valid email address",
  EMAIL_ALREADY_IN_USE: "That email address is already in use",
  ERROR_DURING_REGISTRATION: "We were unable to sign you up for an account. Please make sure you have entered all of your information correctly and try again."
}

//-----------------------------------------------------------------------------
// Styled Components
//-----------------------------------------------------------------------------
const RegisterForm = styled.View`
  width: 100%;
`

export default AuthenticationRegister
