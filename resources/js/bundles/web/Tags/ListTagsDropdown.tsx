//-----------------------------------------------------------------------------
// Imports
//-----------------------------------------------------------------------------
import React, { ChangeEvent,  useEffect, useRef, useState } from 'react'
import { useSelector } from 'react-redux'
import styled from 'styled-components'

import { IAppState } from '@/state'
import { IList } from '@/state/list/types'
import { ITag } from '@/state/tag/types'

import DropdownWithOptions from '@/components/DropdownWithOptions'
import DropdownOption from '@web/Tags/ListTagsDropdownOption'

//-----------------------------------------------------------------------------
// Component
//-----------------------------------------------------------------------------
export const ListTagsDropdown = ({
  listId,
  handleTagCreate = null,
  handleTagSelect,
}: IListTagsDropdown) => {
  
  // Refs
  const container = useRef(null)
  
  // Redux
  const allTags = useSelector((state: IAppState) => state.tag.allTags)
  const listTags = useSelector((state: IAppState) => state.tag.tagsByListId[listId] || [])
  
  // State
  const [ activeDropdownOptionIndex, setActiveDropdownOptionIndex ] = useState(0)
  const [ inputValue, setInputValue ] = useState('')
  const [ isDropdownVisible, setIsDropdownVisible ] = useState(false)

  // Ensure the dropdown is open when the user is typing
  useEffect(() => {
    if(!isDropdownVisible && inputValue !== '') {
      setIsDropdownVisible(true)
    }
  }, [ inputValue ])
  
  // On Tag Create
  const onTagCreate = () => {
    handleTagCreate(inputValue)
    setInputValue('')
    setIsDropdownVisible(false)
    setActiveDropdownOptionIndex(0)
  }
  
  // On Tag Selection
  const onTagSelect = () => {
    const filteredListTags = getFilteredListTags()
    const tagId = filteredListTags[activeDropdownOptionIndex]
    handleTagSelect(tagId)
    setInputValue('')
    setIsDropdownVisible(false)
    setActiveDropdownOptionIndex(0)
  }
  
  // Get Filtered List Tags
  const getFilteredListTags = () => {
    if(listTags) {
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
    return []
  }
  
  const filteredListTags = getFilteredListTags()

  return (
      <Container
        ref={container}>
        <StyledInput
          placeholder="Choose or Create Tag"
          value={inputValue}
          onFocus={() => setIsDropdownVisible(true)}
          onChange={(e: ChangeEvent<HTMLInputElement>) => setInputValue(e.target.value)}/>
        <DropdownWithOptions
          activeDropdownOptionIndex={activeDropdownOptionIndex}
          closeDropdown={() => setIsDropdownVisible(false)}
          containerRef={container}
          dropdownOptions={filteredListTags}
          isDropdownVisible={isDropdownVisible}
          selectDropdownOption={filteredListTags.length > 0 ? onTagSelect : onTagCreate}
          setActiveDropdownOptionIndex={setActiveDropdownOptionIndex}>
          {filteredListTags.map((tagId, index) => (
            <DropdownOption
              key={tagId}
              tagId={tagId}
              index={index}
              isActiveDropdownOption={index === activeDropdownOptionIndex}
              handleTagClick={onTagSelect}
              setActiveDropdownOptionIndex={setActiveDropdownOptionIndex}/>
          ))}
          {handleTagCreate && filteredListTags.length === 0 && inputValue.length > 0 &&
            <CreateTodoDropdownOption
              onClick={onTagCreate}>
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
interface IListTagsDropdown {
  listId: IList['id']
  handleTagCreate?(tagText: string): void
  handleTagSelect(tagId: ITag['id']): void
}

//-----------------------------------------------------------------------------
// Styled Components
//-----------------------------------------------------------------------------
const Container = styled.div`
  position: relative;
`

const StyledInput = styled.input`
  padding: 0.25rem 0;
  margin-bottom: 0.35rem;
  border: none;
  outline: none;
  background-color: transparent;
  font-size: 1rem;
`

const CreateTodoDropdownOption = styled.div`
  cursor: pointer;
`

export default ListTagsDropdown
