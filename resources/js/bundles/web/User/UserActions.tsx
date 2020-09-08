//-----------------------------------------------------------------------------
// Imports
//-----------------------------------------------------------------------------
import React, { useRef, useState } from 'react'
import styled from 'styled-components'

import { SETTINGS } from '@/assets/icons'

import Dropdown from '@/components/Dropdown'
import Icon from '@/components/Icon'
import UserLogout from '@web/User/UserLogout'

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
        closeDropdown={() => setIsDropdownVisible(false)}
        containerRef={container}
        isDropdownVisible={isDropdownVisible}
        top="calc(-100% + -2rem)">
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
    background-color: rgb(200, 200, 200);
    color: black;
  }
`

export default User
