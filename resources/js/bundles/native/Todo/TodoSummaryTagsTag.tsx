//-----------------------------------------------------------------------------
// Imports
//-----------------------------------------------------------------------------
import React from 'react'
import { useSelector } from 'react-redux'
import styled from 'styled-components/native'

import { IAppState } from '@/state'
import { ITodoTag } from '@/state/todoTag/types'


//-----------------------------------------------------------------------------
// Component
//-----------------------------------------------------------------------------
export const TodoSummaryTagsTag = ({
  todoTagId
}: ITodoSummaryTagsTag) => {
  
  // Redux
  const tag = useSelector((state: IAppState) => {
    const tagId = state.todoTag.allTodoTags[todoTagId]?.tagId
    if(tagId) {
      return state.tag.allTags[tagId]
    }
    return null
  })

  if(tag) {
    return (
      <Container
        backgroundColor={tag.backgroundColor}/>
    )
  }
  return null
}

//-----------------------------------------------------------------------------
// Props
//-----------------------------------------------------------------------------
interface ITodoSummaryTagsTag {
  todoTagId: ITodoTag['id']
}

//-----------------------------------------------------------------------------
// Styled Components
//-----------------------------------------------------------------------------
const Container = styled.View`
  background-color: ${ ({ backgroundColor }: IContainer) => backgroundColor };
  width: 18px;
  height: 18px;
  border-radius: 18px;
  margin-left: 5px;
`
interface IContainer {
  backgroundColor: string
}

export default TodoSummaryTagsTag
