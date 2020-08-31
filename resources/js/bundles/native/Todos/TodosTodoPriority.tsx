//-----------------------------------------------------------------------------
// Imports
//-----------------------------------------------------------------------------
import React from 'react'
import { useSelector } from 'react-redux'
import styled from 'styled-components/native'

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
        <StyledText>
          {priority.text}
        </StyledText>
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
const Container = styled.View`
  padding: 0 4px;
  border-radius: 5px;
  margin-right: 6px;
  background-color: ${ ({ backgroundColor }: IContainer ) => backgroundColor };
`
interface IContainer {
  backgroundColor: string
}

const StyledText = styled.Text`
  font-family: OpenSans_700Bold;
  font-size: 20px;
  color: white;
`

export default TodosTodosTodoPriority
