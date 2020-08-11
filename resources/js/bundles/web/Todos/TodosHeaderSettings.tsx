//-----------------------------------------------------------------------------
// Imports
//-----------------------------------------------------------------------------
import React, { useEffect, useRef, useState } from 'react'
import styled from 'styled-components'

import { SETTINGS } from '@/assets/icons'

import { IList } from '@/state/list/types'
import { ISublist } from '@/state/sublist/types'

import Dropdown from '@/components/Dropdown'
import Icon from '@/components/Icon'
import TodosHeaderSettingsList from '@web/Todos/TodosHeaderSettingsList'
import TodosHeaderSettingsSublist from '@web/Todos/TodosHeaderSettingsSublist'

//-----------------------------------------------------------------------------
// Component
//-----------------------------------------------------------------------------
export const TodosHeaderListSettings = ({
  listId,
  sublistId,
  isListOrSublist
}: ITodosHeaderListSettings) => {

  // Refs
  const container = useRef(null)

  // State
  const [ isDropdownVisible, setIsDropdownVisible ] = useState(false)

  // Close the dropdown when the active list changes
  useEffect(() => {
    setIsDropdownVisible(false)
  }, [ listId ])

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
        minHeight="30vh">
        {isListOrSublist === 'LIST'
          ? <TodosHeaderSettingsList
              listId={listId}/>
          : <TodosHeaderSettingsSublist
              sublistId={sublistId}/>}
      </Dropdown>
    </Container>
  )
}

//-----------------------------------------------------------------------------
// Props
//-----------------------------------------------------------------------------
interface ITodosHeaderListSettings {
  listId: IList['id']
  sublistId: ISublist['id']
  isListOrSublist: 'LIST' | 'SUBLIST'
}

//-----------------------------------------------------------------------------
// Styled Components
//-----------------------------------------------------------------------------
const Container = styled.div`
  width: 100%;
  position: relative;`

const IconContainer = styled.div`
  position: relative;
  cursor: pointer;
  color: rgb(50, 50, 50);
  &:hover {
    background-color: rgb(200, 200, 200);
    color: black;
  }
`

export default TodosHeaderListSettings
