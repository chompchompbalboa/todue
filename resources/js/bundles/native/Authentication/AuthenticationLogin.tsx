//-----------------------------------------------------------------------------
// Imports
//-----------------------------------------------------------------------------
import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import AsyncStorage from '@react-native-community/async-storage'
import styled from 'styled-components/native'
import isEmail from 'validator/lib/isEmail'

import { action } from '@/api'

import { updateUser } from '@/state/user/actions'

import AuthenticationButton from '@native/Authentication/AuthenticationButton'
import AuthenticationInput from '@native/Authentication/AuthenticationInput'
import AuthenticationStatus from '@native/Authentication/AuthenticationStatus'

//-----------------------------------------------------------------------------
// Component
//-----------------------------------------------------------------------------
export const AuthenticationLogin = () => {

  // Redux
  const dispatch = useDispatch()

  // State
  const [ emailInputValue, setEmailInputValue ] = useState('')
  const [ passwordInputValue, setPasswordInputValue ] = useState('')
  const [ loginStatus, setLoginStatus ] = useState('READY' as ILoginStatus)
  
  // Handle Login Attempt
  const handleLoginAttempt = () => {
    setLoginStatus('LOGGING_IN')
    if(emailInputValue === '' || passwordInputValue === '') {
      setTimeout(() => {
        setLoginStatus('NOT_ALL_FIELDS_ARE_COMPLETE')
      }, 500)
    }
    else if (!isEmail(emailInputValue)) {
      setTimeout(() => {
        setLoginStatus('NOT_VALID_EMAIL')
      }, 500)
    }
    else {
      action.userRequestAccessToken(emailInputValue, passwordInputValue)
        .then(response => {
          AsyncStorage.setItem('@todue/accessToken', response.data.access_token)
          AsyncStorage.setItem('@todue/refreshToken', response.data.refresh_token)
          dispatch(updateUser({ email: emailInputValue }))
        })
        .catch(response => {
          console.log(response)
          setTimeout(() => {
            setLoginStatus('ERROR_DURING_LOGIN')
          }, 500)
        })
    }
  }
  
  return (
    <LoginForm>
      <InputsContainer>
        <AuthenticationInput
          label={"Email"}
          type="email"
          placeholder="Email"
          value={emailInputValue}
          onChange={nextValue => setEmailInputValue(nextValue)}
          isInputValueValid={emailInputValue === '' || isEmail(emailInputValue)}/>
        <AuthenticationInput
          label={"Password"}
          type="password"
          placeholder="Password"
          value={passwordInputValue}
          onChange={nextValue => setPasswordInputValue(nextValue)}
          isInputValueValid={true}/>
        <AuthenticationButton
          handleButtonPress={handleLoginAttempt}
          text={!['LOGGING_IN'].includes(loginStatus) ? 'Log In' : 'Logging In...'} />
      </InputsContainer>
      <StatusContainer>
        <AuthenticationStatus
          status={SplashLoginFormStatusMessages[loginStatus]}/>
      </StatusContainer>
    </LoginForm>
  )
}

//-----------------------------------------------------------------------------
// Props
//-----------------------------------------------------------------------------
type ILoginStatus = 
  'READY' | 
  'NOT_ALL_FIELDS_ARE_COMPLETE' |
  'NOT_VALID_EMAIL' |
  'LOGGING_IN' | 
  'ERROR_DURING_LOGIN'

  
// Status Messages
export const SplashLoginFormStatusMessages = {
  READY: "",
  NOT_ALL_FIELDS_ARE_COMPLETE: "Please enter your email and password to login",
  NOT_VALID_EMAIL: "Please enter a valid email address",
  LOGGING_IN: "",
  ERROR_DURING_LOGIN: "We were unable to log you in. Please check your username and password and try again."
}

//-----------------------------------------------------------------------------
// Styled Components
//-----------------------------------------------------------------------------
const LoginForm = styled.View`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

const InputsContainer = styled.View`
  width: 100%;
  display: flex;
  flex-direction: column; 
  justify-content: center;
  align-items: center;
`

const StatusContainer = styled.View`
  width: 100%;
`

export default AuthenticationLogin
