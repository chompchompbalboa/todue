//-----------------------------------------------------------------------------
// Imports
//-----------------------------------------------------------------------------
import React, { ChangeEvent,  useEffect, useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import styled from 'styled-components'

import { IAppState } from '@/state'
import { ITodo } from '@/state/todo/types'

import { createListTag } from '@/state/tag/actions'

import DropdownWithOptions from '@/components/DropdownWithOptions'
import DropdownOption from '@web/Todo/TodoTagsCreateTodoTagDropdownOption'

//-----------------------------------------------------------------------------
// Component
//-----------------------------------------------------------------------------
export const TodoTagsCreateTodoTag = ({
  todoId
}: ITodoTagsCreateTodoTag) => {
  
  // Refs
  const container = useRef(null)
  
  // Redux
  const dispatch = useDispatch()
  const allTags = useSelector((state: IAppState) => state.tag.allTags)
  const listId = useSelector((state: IAppState) => state.active.listId)
  const listTags = useSelector((state: IAppState) => state.list.allLists[listId].tags)
  
  // State
  const [ activeDropdownOptionIndex, setActiveDropdownOptionIndex ] = useState(0)
  const [ inputValue, setInputValue ] = useState('')
  const [ isDropdownVisible, setIsDropdownVisible ] = useState(false)
  
  // Close the dropdown and clear the input value when the user navigates to a different tod
  useEffect(() => {
    setInputValue('')
    setIsDropdownVisible(false)
    setActiveDropdownOptionIndex(0)
  }, [ todoId ])
  
  // Create List Tag
  const handleCreateListTag = () => {
    dispatch(createListTag(listId, todoId, inputValue, 'red'))
    setInputValue('')
  }
  
  // Create Todo Tag
  const handleCreateTodoTag = () => {
    console.log(inputValue)
  }
  
  // Get Filtered List Tags
  const getFilteredListTags = () => {
    if(inputValue.length === 0) {
      return listTags
    }
    return listTags.filter(tagId => {
      const currentTag = allTags[tagId]
      if(currentTag) {
        return currentTag.text.toLowerCase().includes(inputValue.toLowerCase())
      }
      return false
    })
  }
  
  const filteredListTags = getFilteredListTags()

  return (
      <Container
        ref={container}>
        <StyledInput
          value={inputValue}
          onFocus={() => setIsDropdownVisible(true)}
          onChange={(e: ChangeEvent<HTMLInputElement>) => setInputValue(e.target.value)}/>
        <DropdownWithOptions
          activeDropdownOptionIndex={activeDropdownOptionIndex}
          closeDropdown={() => setIsDropdownVisible(false)}
          containerRef={container}
          dropdownOptions={filteredListTags}
          isDropdownVisible={isDropdownVisible}
          selectDropdownOption={filteredListTags.length > 0 ? handleCreateTodoTag : handleCreateListTag}
          setActiveDropdownOptionIndex={setActiveDropdownOptionIndex}>
          {filteredListTags && filteredListTags.map(tagId => (
            <DropdownOption
              key={tagId}
              tagId={tagId}/>
          ))}
          {filteredListTags.length === 0 && inputValue.length > 0 &&
            <CreateTodoDropdownOption
              onClick={handleCreateListTag}>
              Create "{inputValue}" Tag
            </CreateTodoDropdownOption>
          }
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
const Container = styled.div`
  position: relative;
`

const StyledInput = styled.input``

const CreateTodoDropdownOption = styled.div`
  cursor: pointer;
`

export default TodoTagsCreateTodoTag
