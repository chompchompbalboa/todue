//-----------------------------------------------------------------------------
// Imports
//-----------------------------------------------------------------------------
import React from 'react'
import { useSelector } from 'react-redux'
import styled from 'styled-components'

import { IAppState } from '@/state'
import { ITodo } from '@/state/todo/types'

import TodosTodosTodoTagsTag from '@web/Todos/TodosTodosTodoTagsTag'

//-----------------------------------------------------------------------------
// Component
//-----------------------------------------------------------------------------
export const TodosTodosTodoTags = ({
  todoId
}: ITodosTodosTodoTags) => {

  // Redux
  const isTodoTagsVisible = useSelector((state: IAppState) => state.active.isTodoTagsVisible)
  const todoTags = useSelector((state: IAppState) => state.todoTag.todoTagsByTodoId[todoId])

  if(isTodoTagsVisible) {
    return (
      <Container>
        {todoTags && todoTags.map(todoTagId => (
          <TodosTodosTodoTagsTag
            key={todoTagId}
            todoTagId={todoTagId}/>
        ))}
      </Container>
    )
  }
  return null
}

//-----------------------------------------------------------------------------
// Props
//-----------------------------------------------------------------------------
interface ITodosTodosTodoTags {
  todoId: ITodo['id']
}

//-----------------------------------------------------------------------------
// Styled Components
//-----------------------------------------------------------------------------
const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`

export default TodosTodosTodoTags
