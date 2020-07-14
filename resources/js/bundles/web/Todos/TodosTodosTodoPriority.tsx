//-----------------------------------------------------------------------------
// Imports
//-----------------------------------------------------------------------------
import React from 'react'
import { useSelector } from 'react-redux'
import styled from 'styled-components'

import { IAppState } from '@/state'
import { ITodo } from '@/state/todo/types'

//-----------------------------------------------------------------------------
// Component
//-----------------------------------------------------------------------------
export const TodosTodosTodoPriority = ({
  todoId
}: ITodosTodosTodoPriority) => {

  // Redux
  const todoPriority = useSelector((state: IAppState) => state.todo.allTodos[todoId].priority)
  
  const priorities = [
    { value: 1, text: "!", backgroundColor: "rgb(255, 200, 0)"},
    { value: 2, text: "!!", backgroundColor: "rgb(250, 150, 50)" },
    { value: 3, text: "!!!", backgroundColor: "rgb(200, 0, 0)" },
  ]
  
  const priority = priorities.find(currentPriority => currentPriority.value === todoPriority)

  if(todoPriority && priority) {
    return (
      <Container
        backgroundColor={priority.backgroundColor}>
        {priority.text}
      </Container>
    )
  }
  return null
}

//-----------------------------------------------------------------------------
// Props
//-----------------------------------------------------------------------------
interface ITodosTodosTodoPriority {
  todoId: ITodo['id']
}

//-----------------------------------------------------------------------------
// Styled Components
//-----------------------------------------------------------------------------
const Container = styled.div`
  padding: 0 0.25rem;
  border-radius: 5px;
  white-space: nowrap;
  margin-right: 0.375rem;
  font-size: 0.925rem;
  font-weight: bold;
  background-color: ${ ({ backgroundColor }: IContainer ) => backgroundColor };
  color: white;
`
interface IContainer {
  backgroundColor: string
}

export default TodosTodosTodoPriority
