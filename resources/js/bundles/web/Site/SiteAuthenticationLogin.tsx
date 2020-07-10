//-----------------------------------------------------------------------------
// Imports
//-----------------------------------------------------------------------------
import React, { FormEvent, useState } from 'react'
import styled from 'styled-components'
import isEmail from 'validator/lib/isEmail'

import { action } from '@/api'

import SiteAuthenticationButton from '@web/Site/SiteAuthenticationButton'
import SiteAuthenticationInput from '@web/Site/SiteAuthenticationInput'
import SiteAuthenticationStatus from '@web/Site/SiteAuthenticationStatus'

//-----------------------------------------------------------------------------
// Component
//-----------------------------------------------------------------------------
export const SiteAuthenticationLogin = () => {

  // State
  const [ emailInputValue, setEmailInputValue ] = useState('')
  const [ passwordInputValue, setPasswordInputValue ] = useState('')
  const [ loginStatus, setLoginStatus ] = useState('READY' as ILoginStatus)
  
  // Handle Login Attempt
  const handleLoginAttempt = (e: FormEvent) => {
    e.preventDefault()
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
      action.userLogin(emailInputValue, passwordInputValue)
        .then(() => {
          window.location.reload()
        })
        .catch(() => {
          setTimeout(() => {
            setLoginStatus('ERROR_DURING_LOGIN')
          }, 500)
        })
    }
  }
  
  return (
    <LoginForm 
      onSubmit={e => handleLoginAttempt(e)}>
      <InputsContainer>
        <SiteAuthenticationInput
          label={"Email"}
          type="email"
          placeholder="Email"
          value={emailInputValue}
          onChange={nextValue => setEmailInputValue(nextValue)}
          isInputValueValid={emailInputValue === '' || isEmail(emailInputValue)}/>
        <SiteAuthenticationInput
          label={"Password"}
          type="password"
          placeholder="Password"
          value={passwordInputValue}
          onChange={nextValue => setPasswordInputValue(nextValue)}
          isInputValueValid={true}/>
        <SiteAuthenticationButton
          text={!['LOGGING_IN'].includes(loginStatus) ? 'Log In' : 'Logging In...'} />
      </InputsContainer>
      <StatusContainer>
        <SiteAuthenticationStatus
          status={siteSplashLoginFormStatusMessages[loginStatus]}/>
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
export const siteSplashLoginFormStatusMessages = {
  READY: "",
  NOT_ALL_FIELDS_ARE_COMPLETE: "Please enter your email and password to login",
  NOT_VALID_EMAIL: "Please enter a valid email address",
  LOGGING_IN: "",
  ERROR_DURING_LOGIN: "We were unable to log you in. Please check your username and password and try again."
}

//-----------------------------------------------------------------------------
// Styled Components
//-----------------------------------------------------------------------------
const LoginForm = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

const InputsContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column; 
  justify-content: center;
  align-items: center;
  @media (max-width: 480px) {
    flex-direction: column;
  }
`

const StatusContainer = styled.div`
  width: 100%;
`

export default SiteAuthenticationLogin
