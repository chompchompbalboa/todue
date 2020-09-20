//-----------------------------------------------------------------------------
// Imports
//-----------------------------------------------------------------------------
import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import AsyncStorage from '@react-native-community/async-storage'
import styled from 'styled-components/native'
import isEmail from 'validator/lib/isEmail'

import { action } from '@/api'
import { attachTokensToRequest } from '@/api/axios'

import { updateUser } from '@/state/user/actions'

import AuthenticationButton from '@native/Authentication/AuthenticationButton'
import AuthenticationStatus from '@native/Authentication/AuthenticationStatus'

//-----------------------------------------------------------------------------
// Component
//-----------------------------------------------------------------------------
export const AuthenticationLogin = ({
  email,
  password
}: IAuthenticationLogin) => {

  // Redux
  const dispatch = useDispatch()

  // State
  const [ loginStatus, setLoginStatus ] = useState('READY' as ILoginStatus)
  
  // Handle Login Attempt
  const handleLoginAttempt = () => {
    setLoginStatus('LOGGING_IN')
    if(email === '' || password === '') {
      setTimeout(() => {
        setLoginStatus('NOT_ALL_FIELDS_ARE_COMPLETE')
      }, 500)
    }
    else if (!isEmail(email)) {
      setTimeout(() => {
        setLoginStatus('NOT_VALID_EMAIL')
      }, 500)
    }
    else {
      action.userRequestAccessToken(email, password)
        .then(response => {
          AsyncStorage.setItem('@todue/accessToken', response.data.access_token)
          AsyncStorage.setItem('@todue/refreshToken', response.data.refresh_token)
          attachTokensToRequest().then(() => {
            dispatch(updateUser({ email: email }))
          })
        })
        .catch(() => {
          AsyncStorage.removeItem('@todue/accessToken')
          AsyncStorage.removeItem('@todue/refreshToken')
          setTimeout(() => {
            setLoginStatus('ERROR_DURING_LOGIN')
          }, 500)
        })
    }
  }
  
  return (
    <LoginForm>
      <AuthenticationButton
        handleButtonPress={handleLoginAttempt}
        text={!['LOGGING_IN'].includes(loginStatus) ? 'Log In' : 'Logging In...'} />
      <AuthenticationStatus
        status={SplashLoginFormStatusMessages[loginStatus]}/>
    </LoginForm>
  )
}

//-----------------------------------------------------------------------------
// Props
//-----------------------------------------------------------------------------
interface IAuthenticationLogin {
  email: string
  password: string
}

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

export default AuthenticationLogin
