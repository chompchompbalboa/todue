//-----------------------------------------------------------------------------
// Imports
//-----------------------------------------------------------------------------
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import styled from 'styled-components/native'

import { IAppState } from '@/state'
import { ITodo } from '@/state/todo/types'

import { updateTodo } from '@/state/todo/actions'

//-----------------------------------------------------------------------------
// Component
//-----------------------------------------------------------------------------
export const TodoDateTime = ({
  todoId
}: ITodoDateTime) => {

  // Redux
  const dispatch = useDispatch()
  const todoPriority = useSelector((state: IAppState) => todoId && state.todo.allTodos[todoId].priority)
  
  // Priorities
  const priorities = [
    { value: null, text: "None", backgroundColor: "rgb(150, 150, 150)" },
    { value: 1, text: "Low", backgroundColor: "rgb(255, 200, 0)" },
    { value: 2, text: "Medium", backgroundColor: "rgb(250, 150, 50)" },
    { value: 3, text: "High", backgroundColor: "rgb(200, 0, 0)" },
  ]

  return (
      <Container>
        {priorities.map(priority => (
          <PriorityTouchable
            key={priority.text}
            onPress={() => {
              dispatch(updateTodo(todoId, 
                { priority: priority.value },
                { priority: todoPriority },
                true
            ))}}>
            <Priority
              backgroundColor={priority.backgroundColor}
              isSelected={todoPriority === priority.value}>
              <PriorityText
                isSelected={todoPriority === priority.value}>
                {priority.text}
              </PriorityText>
            </Priority>
          </PriorityTouchable>
        ))}
      </Container>
  )
}

//-----------------------------------------------------------------------------
// Props
//-----------------------------------------------------------------------------
interface ITodoDateTime {
  todoId: ITodo['id']
}

//-----------------------------------------------------------------------------
// Styled Components
//-----------------------------------------------------------------------------
const Container = styled.View`
  padding: 0 15px;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
`

const PriorityTouchable = styled.TouchableWithoutFeedback``
const Priority = styled.View`
  margin-right: 4px;
  padding: 10px 15px;
  background-color: ${ ({ backgroundColor, isSelected }: IPriority ) => isSelected ? backgroundColor : 'transparent' };
  border-radius: 10px;
`
interface IPriority {
  backgroundColor: string
  isSelected: boolean
}

const PriorityText = styled.Text`
  font-size: 20px;
  font-family: OpenSans_400Regular;
  color: ${ ({ isSelected }: IPriorityText ) => isSelected ? 'white' : 'black' };
`
interface IPriorityText {
  isSelected: boolean
}

export default TodoDateTime
