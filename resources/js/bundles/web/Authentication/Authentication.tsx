//-----------------------------------------------------------------------------
// Imports
//-----------------------------------------------------------------------------
import React, { useState } from 'react'
import styled from 'styled-components'

import AuthenticationChooseActiveForm from '@web/Authentication/AuthenticationChooseActiveForm'
import AuthenticationLogin from '@web/Authentication/AuthenticationLogin'
import AuthenticationRegister from '@web/Authentication/AuthenticationRegister'

//-----------------------------------------------------------------------------
// Component
//-----------------------------------------------------------------------------
export const Authentication = () => {

  const [ activeForm, setActiveForm ] = useState('REGISTER' as 'REGISTER' | 'LOGIN')

  return (
    <FormsContainer>
      <AuthenticationChooseActiveForm
        activeForm={activeForm}
        setActiveForm={setActiveForm}/>
      <Forms>
        {activeForm === 'REGISTER' && <AuthenticationRegister />}
        {activeForm === 'LOGIN' && <AuthenticationLogin />}
      </Forms>
    </FormsContainer>
  )
}

//-----------------------------------------------------------------------------
// Styled Components
//-----------------------------------------------------------------------------
const FormsContainer = styled.div`
width: 90%;
padding: 1rem;
color: black;
`

const Forms = styled.div`
padding: 1.5rem;
background-color: rgb(230, 230, 230);
border-bottom-left-radius: 6px;
border-bottom-right-radius: 6px;
`

export default Authentication
