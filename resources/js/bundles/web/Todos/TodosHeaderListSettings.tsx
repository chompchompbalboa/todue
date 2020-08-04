//-----------------------------------------------------------------------------
// Imports
//-----------------------------------------------------------------------------
import React, { useEffect, useRef, useState } from 'react'
import styled from 'styled-components'

import { SETTINGS } from '@/assets/icons'

import { IList } from '@/state/list/types'

import Dropdown from '@/components/Dropdown'
import Icon from '@/components/Icon'
import TodosHeaderDeleteList from '@web/Todos/TodosHeaderDeleteList'

//-----------------------------------------------------------------------------
// Component
//-----------------------------------------------------------------------------
export const TodosHeaderListSettings = ({
  listId
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
        isDropdownVisible={isDropdownVisible}>
        <TodosHeaderDeleteList
          listId={listId}/>
      </Dropdown>
    </Container>
  )
}

//-----------------------------------------------------------------------------
// Props
//-----------------------------------------------------------------------------
interface ITodosHeaderListSettings {
  listId: IList['id']
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
