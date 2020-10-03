//-----------------------------------------------------------------------------
// Imports
//-----------------------------------------------------------------------------
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import styled from 'styled-components/native'

import { IAppState } from '@/state'
import { ITodo } from '@/state/todo/types'

import { updateTodo } from '@/state/todo/actions'

import TodoItem from '@native/Todo/TodoItem'

//-----------------------------------------------------------------------------
// Component
//-----------------------------------------------------------------------------
export const TodoSummaryPriority = ({
  todoId
}: ITodoSummaryPriority) => {

  // Redux
  const dispatch = useDispatch()
  const todoPriority = useSelector((state: IAppState) => todoId && state.todo.allTodos[todoId]?.priority)
  
  // Priorities
  const priorities = [
    { value: null, text: "-", backgroundColor: "rgb(150, 150, 150)" },
    { value: 1, text: "!", backgroundColor: "rgb(255, 200, 0)" },
    { value: 2, text: "!!", backgroundColor: "rgb(250, 150, 50)" },
    { value: 3, text: "!!!", backgroundColor: "rgb(200, 0, 0)" },
  ]

  return (
    <TodoItem
      icon="star"
      label="Priority">
      <Container>
        {priorities.map(priority => (
          <PriorityTouchable
            key={priority.text}
            hitSlop={{ top: 10, bottom: 10, left: 10, right: 10 }}
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
    </TodoItem>
  )
}

//-----------------------------------------------------------------------------
// Props
//-----------------------------------------------------------------------------
interface ITodoSummaryPriority {
  todoId: ITodo['id']
}

//-----------------------------------------------------------------------------
// Styled Components
//-----------------------------------------------------------------------------
const Container = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
`

const PriorityTouchable = styled.TouchableWithoutFeedback``
const Priority = styled.View`
  margin-left: 15px;
  padding: 0px 8px;
  background-color: ${ ({ backgroundColor, isSelected }: IPriority ) => isSelected ? backgroundColor : 'transparent' };
  border-radius: 5px;
`
interface IPriority {
  backgroundColor: string
  isSelected: boolean
}

const PriorityText = styled.Text`
  font-size: 22px;
  font-family: OpenSans_600SemiBold;
  color: ${ ({ isSelected }: IPriorityText ) => isSelected ? 'white' : 'black' };
`
interface IPriorityText {
  isSelected: boolean
}

export default TodoSummaryPriority
