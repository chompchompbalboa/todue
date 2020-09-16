//-----------------------------------------------------------------------------
// Imports
//-----------------------------------------------------------------------------
import React, { useRef, useState } from 'react'
import styled from 'styled-components'

import { SETTINGS } from '@/assets/icons'

import Dropdown from '@/components/Dropdown'
import Icon from '@/components/Icon'
import UserLogout from '@web/User/UserLogout'
import UserManageSubscription from '@web/User/UserManageSubscription'

//-----------------------------------------------------------------------------
// Component
//-----------------------------------------------------------------------------
export const User = () => {
  
  // Refs
  const container = useRef(null)
  
  // State
  const [ isDropdownVisible, setIsDropdownVisible ] = useState(false)
  
  return (
    <Container
      ref={container}>
      <OpenDropdownButton
        onClick={() => setIsDropdownVisible(true)}>
        <Icon
          icon={SETTINGS}
          size="0.9rem"/>
      </OpenDropdownButton>
      <Dropdown
        bottom="100%"
        closeDropdown={() => setIsDropdownVisible(false)}
        containerRef={container}
        isDropdownVisible={isDropdownVisible}>
        <UserManageSubscription 
          closeDropdown={() => setIsDropdownVisible(false)}/>
        <UserLogout />
      </Dropdown>
    </Container>
  )
}

//-----------------------------------------------------------------------------
// Styled Components
//-----------------------------------------------------------------------------
const Container = styled.div`
  position: relative;
`

const OpenDropdownButton = styled.div`
  position: relative;
  cursor: pointer;
  color: rgb(50, 50, 50);
  &:hover {
    background-color: rgb(240, 240, 240);
    color: black;
  }
`

export default User
