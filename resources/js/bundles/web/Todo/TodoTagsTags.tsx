//-----------------------------------------------------------------------------
// Imports
//-----------------------------------------------------------------------------
import React from 'react'
import { useSelector } from 'react-redux'
import styled from 'styled-components'

import { IAppState } from '@/state'
import { ITodo } from '@/state/todo/types'

import TodoTagsTagsTag from '@web/Todo/TodoTagsTagsTag'

//-----------------------------------------------------------------------------
// Component
//-----------------------------------------------------------------------------
export const TodoTagsTags = ({
  todoId
}: ITodoTagsTags) => {
  
  // Redux
  const todoTags = useSelector((state: IAppState) => state.todoTag.todoTagsByTodoId[todoId])

  return (
      <Container>
        {todoTags && todoTags.map(todoTagId => (
          <TodoTagsTagsTag
            key={todoTagId}
            todoTagId={todoTagId}/>
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
const Container = styled.div`
  display: flex;
  flex-flow: row wrap;
`

export default TodoTagsTags
