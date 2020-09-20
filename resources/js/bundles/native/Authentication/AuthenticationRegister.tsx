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
export const AuthenticationRegister = ({
  email,
  password
}: IAuthenticationRegister) => {

  // Redux
  const dispatch = useDispatch()
  
  // State
  const [ registerStatus, setRegisterStatus ] = useState('READY' as IRegisterStatus)
  
  // Handle Register Attempt
  const handleRegisterAttempt = () => {
    setRegisterStatus('REGISTERING')
    if(email === '' || password === '') {
      setTimeout(() => {
        setRegisterStatus('NOT_ALL_FIELDS_ARE_COMPLETE')
      }, 500)
    }
    else if(!isEmail(email)) {
      setTimeout(() => {
        setRegisterStatus('NOT_VALID_EMAIL')
      }, 500)
    }
    else {
      action.userRegister(email, password)
        .then(() => {
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
                setRegisterStatus('ERROR_DURING_LOGIN')
              }, 500)
            })
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
interface IAuthenticationRegister {
  email: string
  password: string
}

type IRegisterStatus = 
  'READY' | 
  'REGISTERING' | 
  'NOT_ALL_FIELDS_ARE_COMPLETE' |
  'NOT_VALID_EMAIL' |
  'EMAIL_ALREADY_IN_USE' |
  'ERROR_DURING_REGISTRATION' |
  'ERROR_DURING_LOGIN'
  
// Status Messages
export const AuthenticationRegisterStatusMessages = {
  READY: "",
  REGISTERING: "",
  NOT_ALL_FIELDS_ARE_COMPLETE: "Please enter your email and password to create an account",
  NOT_VALID_EMAIL: "Please enter a valid email address",
  EMAIL_ALREADY_IN_USE: "That email address is already in use",
  ERROR_DURING_REGISTRATION: "There was a problem creating your account. Please try again.",
  ERROR_DURING_LOGIN: "Your account was succesfully created, but there was a problem logging you in. Please try logging in with the same email and password you just submitted."
}

//-----------------------------------------------------------------------------
// Styled Components
//-----------------------------------------------------------------------------
const RegisterForm = styled.View`
  width: 100%;
`

export default AuthenticationRegister
