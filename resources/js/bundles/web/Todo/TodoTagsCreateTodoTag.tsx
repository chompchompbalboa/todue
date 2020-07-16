//-----------------------------------------------------------------------------
// Imports
//-----------------------------------------------------------------------------
import React, { ChangeEvent, useRef, useState } from 'react'
import { useSelector } from 'react-redux'
import styled from 'styled-components'

import { IAppState } from '@/state'
import { ITodo } from '@/state/todo/types'

import DropdownWithOptions from '@/components/DropdownWithOptions'

//-----------------------------------------------------------------------------
// Component
//-----------------------------------------------------------------------------
export const TodoTagsCreateTodoTag = ({
  todoId
}: ITodoTagsCreateTodoTag) => {
  
  // Refs
  const container = useRef(null)
  
  // Redux
  const listTags = useSelector((state: IAppState) => state.list.allLists[state.active.listId].tags)
  
  // State
  const [ activeDropdownOptionIndex, setActiveDropdownOptionIndex ] = useState(0)
  const [ inputValue, setInputValue ] = useState('')
  const [ isDropdownVisible, setIsDropdownVisible ] = useState(false)
  
  // Create Todo Tag
  const createTodoTag = () => {
    console.log(inputValue)
  }

  return (
      <Container>
        <StyledInput
          value={inputValue}
          onChange={(e: ChangeEvent<HTMLInputElement>) => setInputValue(e.target.value)}
          onSubmit={createTodoTag}/>
        <DropdownWithOptions
          activeDropdownOptionIndex={activeDropdownOptionIndex}
          closeDropdown={() => setIsDropdownVisible(false)}
          dropdownOptions={listTags}
          isDropdownVisible={isDropdownVisible}
          selectDropdownOption={createTodoTag}
          setActiveDropdownOptionIndex={setActiveDropdownOptionIndex}>
          Dropdown
        </DropdownWithOptions>
      </Container>
  )
}

//-----------------------------------------------------------------------------
// Props
//-----------------------------------------------------------------------------
interface ITodoTagsCreateTodoTag {
  todoId: ITodo['id']
}

//-----------------------------------------------------------------------------
// Styled Components
//-----------------------------------------------------------------------------
const Container = styled.div``

const StyledInput = styled.input``

export default TodoTagsCreateTodoTag
