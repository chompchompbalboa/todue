//-----------------------------------------------------------------------------
// Imports
//-----------------------------------------------------------------------------
import React from 'react'
import { useSelector } from 'react-redux'
import styled from 'styled-components'

import { IAppState } from '@/state'
import { ITag } from '@/state/tag/types'

//-----------------------------------------------------------------------------
// Component
//-----------------------------------------------------------------------------
export const ListTagsDropdownOption = ({
  tagId,
  index,
  isActiveDropdownOption,
  handleTagClick,
  setActiveDropdownOptionIndex
}: IListTagsDropdownOption) => {
  
  // Redux
  const tagBackgroundColor = useSelector((state: IAppState) => state.tag.allTags[tagId].backgroundColor)
  const tagText = useSelector((state: IAppState) => state.tag.allTags[tagId].text)

  return (
      <Container
        isActiveDropdownOption={isActiveDropdownOption}
        onClick={handleTagClick}
        onMouseEnter={() => setActiveDropdownOptionIndex(index)}>
        <Text>{tagText}</Text>
        <BackgroundColor
          backgroundColor={tagBackgroundColor}/>
      </Container>
  )
}

//-----------------------------------------------------------------------------
// Props
//-----------------------------------------------------------------------------
interface IListTagsDropdownOption {
  tagId: ITag['id']
  index: number
  isActiveDropdownOption: boolean
  handleTagClick(): void
  setActiveDropdownOptionIndex(nextActiveDropdownOptionIndex: number): void
}

//-----------------------------------------------------------------------------
// Styled Components
//-----------------------------------------------------------------------------
const Container = styled.div`
  cursor: pointer;
  padding: 0.125rem 0.25rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: ${ ({ isActiveDropdownOption }: IContainer ) => isActiveDropdownOption ? 'rgb(240, 240, 240)' : 'auto' };
  &:hover {
    background-color: rgb(240, 240, 240);
  }
`
interface IContainer {
  isActiveDropdownOption: boolean
}

const Text = styled.div``

const BackgroundColor = styled.div`
  margin-right: 0.375rem;
  height: 0.75rem;
  width: 0.75rem;
  border-radius: 0.375rem;
  background-color: ${ ({ backgroundColor }: IBackgroundColor ) => backgroundColor };
`
interface IBackgroundColor {
  backgroundColor: string
}

export default ListTagsDropdownOption
