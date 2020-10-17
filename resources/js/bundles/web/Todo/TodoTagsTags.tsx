//-----------------------------------------------------------------------------
// Imports
//-----------------------------------------------------------------------------
import React from 'react'
import { useSelector } from 'react-redux'
import styled from 'styled-components'

import { IAppState } from '@/state'
import { ITodo } from '@/state/todo/types'
import { ITodoTag } from '@/state/todoTag/types'

import TodoTagsTagsTag from '@web/Todo/TodoTagsTagsTag'

//-----------------------------------------------------------------------------
// Component
//-----------------------------------------------------------------------------
export const TodoTagsTags = ({
  todoId
}: ITodoTagsTags) => {

  // Redux
  const listId = useSelector((state: IAppState) => state.active.listId)
  const listTags = useSelector((state: IAppState) => {
    if(listId) {
      return state.tag.tagsByListId[listId] || []
    }
    return []
  })
  const todoTagIdsByTagId = useSelector((state: IAppState) => {
    const output = {} as { [tagId: string]: ITodoTag['id'] }
    const todoTags = state.todoTag.todoTagsByTodoId[todoId]
    if(todoTags) {
      todoTags.forEach(todoTagId => {
        const tagId = state.todoTag.allTodoTags[todoTagId]?.tagId
        if(tagId) {
          output[tagId] = todoTagId
        }
      })
    }
    return output
  })

  return (
    <Container>
      {listTags && listTags.map(tagId => (
        <TodoTagsTagsTag
          key={tagId}
          listId={listId}
          todoId={todoId}
          tagId={tagId}
          todoTagId={todoTagIdsByTagId[tagId]}/>
      ))}
    </Container>
  )
}

//-----------------------------------------------------------------------------
// Props
//-----------------------------------------------------------------------------
interface ITodoTagsTags {
  todoId: ITodo['id']
}

//-----------------------------------------------------------------------------
// Styled Components
//-----------------------------------------------------------------------------
const Container = styled.div``

export default TodoTagsTags
