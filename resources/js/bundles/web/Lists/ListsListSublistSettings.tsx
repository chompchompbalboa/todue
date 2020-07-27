//-----------------------------------------------------------------------------
// Imports
//-----------------------------------------------------------------------------
import React, { useRef, useState } from 'react'
import styled from 'styled-components'

import { SETTINGS } from '@/assets/icons'

import { IList } from '@/state/list/types'

import Dropdown from '@/components/Dropdown'
import Icon from '@/components/Icon'

//-----------------------------------------------------------------------------
// Component
//-----------------------------------------------------------------------------
export const ListsListSublistSettings = ({
  sublistId
}: IListsListSublistSettings) => {

  // Refs
  const container = useRef(null)

  // State
  const [ isDropdownVisible, setIsDropdownVisible ] = useState(false)

  return (
    <Container
      ref={container}>
      <IconContainer
        isDropdownVisible={isDropdownVisible}
        onClick={() => setIsDropdownVisible(true)}>
        <Icon
          icon={SETTINGS}
          size="0.9rem"/>
      </IconContainer>
      <Dropdown
        containerRef={container}
        closeDropdown={() => setIsDropdownVisible(false)}
        isDropdownVisible={isDropdownVisible}>
        Sublist
      </Dropdown>
    </Container>
  )
}

//-----------------------------------------------------------------------------
// Props
//-----------------------------------------------------------------------------
interface IListsListSublistSettings {
  sublistId: IList['id']
}

//-----------------------------------------------------------------------------
// Styled Components
//-----------------------------------------------------------------------------
const Container = styled.div`
  position: relative;`

const IconContainer = styled.div`
  position: relative;
  cursor: pointer;
  font-weight: ${ ({ isDropdownVisible }: IIconContainer) => isDropdownVisible ? 'bold' : 'inherit' };
  color: rgb(50, 50, 50);
`
interface IIconContainer {
  isDropdownVisible: boolean
}

export default ListsListSublistSettings
