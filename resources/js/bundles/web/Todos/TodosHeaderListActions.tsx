//-----------------------------------------------------------------------------
// Imports
//-----------------------------------------------------------------------------
import React, { useEffect, useRef, useState } from 'react'
import styled from 'styled-components'

import { IList } from '@/state/list/types'

import Dropdown from '@/components/Dropdown'
import TodosHeaderDeleteList from '@web/Todos/TodosHeaderDeleteList'

//-----------------------------------------------------------------------------
// Component
//-----------------------------------------------------------------------------
export const TodosHeaderListActions = ({
  listId
}: ITodosHeaderListActions) => {

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
        isDropdownVisible={isDropdownVisible}
        onClick={() => setIsDropdownVisible(true)}>
        ...
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
interface ITodosHeaderListActions {
  listId: IList['id']
}

//-----------------------------------------------------------------------------
// Styled Components
//-----------------------------------------------------------------------------
const Container = styled.div`
  position: relative;`

const IconContainer = styled.div`
  cursor: pointer;
  text-align: right;
  font-weight: ${ ({ isDropdownVisible }: IIconContainer) => isDropdownVisible ? 'bold' : 'inherit' };
  &:hover {

  }
`
interface IIconContainer {
  isDropdownVisible: boolean
}

export default TodosHeaderListActions
