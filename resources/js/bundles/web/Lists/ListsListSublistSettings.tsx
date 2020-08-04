//-----------------------------------------------------------------------------
// Imports
//-----------------------------------------------------------------------------
import React, { useRef, useState } from 'react'
import styled from 'styled-components'

import { SETTINGS } from '@/assets/icons'

import { ISublist } from '@/state/sublist/types'

import Dropdown from '@/components/Dropdown'
import Icon from '@/components/Icon'

import ListsListSublistSettingsTags from '@web/Lists/ListsListSublistSettingsTags'

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
        onClick={() => setIsDropdownVisible(true)}>
        <Icon
          icon={SETTINGS}
          size="0.9rem"/>
      </IconContainer>
      <Dropdown
        containerRef={container}
        closeDropdown={() => setIsDropdownVisible(false)}
        isDropdownVisible={isDropdownVisible}
        minHeight="40vh"
        minWidth="40vw">
        <ListsListSublistSettingsTags
          sublistId={sublistId}/>
      </Dropdown>
    </Container>
  )
}

//-----------------------------------------------------------------------------
// Props
//-----------------------------------------------------------------------------
interface IListsListSublistSettings {
  sublistId: ISublist['id']
}

//-----------------------------------------------------------------------------
// Styled Components
//-----------------------------------------------------------------------------
const Container = styled.div`
  position: relative;`

const IconContainer = styled.div`
  position: relative;
  cursor: pointer;
`

export default ListsListSublistSettings
