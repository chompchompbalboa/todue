//-----------------------------------------------------------------------------
// Imports
//-----------------------------------------------------------------------------
import React from 'react'
import { useSelector } from 'react-redux'
import styled from 'styled-components'

import { IAppState } from '@/state'
import { ITodoTag } from '@/state/todoTag/types'

//-----------------------------------------------------------------------------
// Component
//-----------------------------------------------------------------------------
export const TodosTodosTodoTagsTag = ({
  todoTagId
}: ITodosTodosTodoTagsTag) => {
  
  // Redux
  const tagBackgroundColor = useSelector((state: IAppState) => {
    const tagId = state.todoTag.allTodoTags[todoTagId]?.tagId
    if(tagId) {
      const tag = state.tag.allTags[tagId]
      if(tag) {
        return tag.backgroundColor
      }
      return null
    }
    return null
  })
  
  return (
    <Container>
      {tagBackgroundColor &&
        <Tag
         backgroundColor={tagBackgroundColor}/>}
    </Container>
  )
}

//-----------------------------------------------------------------------------
// Props
//-----------------------------------------------------------------------------
interface ITodosTodosTodoTagsTag {
  todoTagId: ITodoTag['id']
}

//-----------------------------------------------------------------------------
// Styled Components
//-----------------------------------------------------------------------------
const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 0.5rem;
`
                               
const Tag = styled.div`
  background-color: ${ ({ backgroundColor }: ITag) => backgroundColor };
  height: 0.25rem;
  width: 0.5rem;
  border-radius: 0.125rem;
`
interface ITag {
  backgroundColor: string
}  

export default TodosTodosTodoTagsTag
