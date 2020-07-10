//-----------------------------------------------------------------------------
// Imports
//-----------------------------------------------------------------------------
import React, { useState } from 'react'
import styled from 'styled-components'

import SiteAuthenticationChooseActiveForm from '@web/Site/SiteAuthenticationChooseActiveForm'
import SiteAuthenticationLogin from '@web/Site/SiteAuthenticationLogin'
import SiteAuthenticationRegister from '@web/Site/SiteAuthenticationRegister'

//-----------------------------------------------------------------------------
// Component
//-----------------------------------------------------------------------------
export const SiteAuthentication = () => {

  const [ activeSiteAction, setActiveSiteAction ] = useState('REGISTER' as 'REGISTER' | 'LOGIN')

  return (
    <ActionsContainer>
      <SiteAuthenticationChooseActiveForm
        activeSiteAction={activeSiteAction}
        setActiveSiteAction={setActiveSiteAction}/>
      <Actions>
        {activeSiteAction === 'REGISTER' && <SiteAuthenticationRegister />}
        {activeSiteAction === 'LOGIN' && <SiteAuthenticationLogin />}
      </Actions>
    </ActionsContainer>
  )
}

//-----------------------------------------------------------------------------
// Styled Components
//-----------------------------------------------------------------------------
const ActionsContainer = styled.div`
width: 90%;
padding: 1rem;
color: black;
`

const Actions = styled.div`
padding: 1.5rem;
background-color: rgb(230, 230, 230);
border-bottom-left-radius: 6px;
border-bottom-right-radius: 6px;
`

export default SiteAuthentication
