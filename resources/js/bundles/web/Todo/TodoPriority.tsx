//-----------------------------------------------------------------------------
// Imports
//-----------------------------------------------------------------------------
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import styled from 'styled-components'

import { IAppState } from '@/state'
import { ITodo } from '@/state/todo/types'

import { updateTodo } from '@/state/todo/actions'

import TodoSection from '@web/Todo/TodoSection'

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
      <TodoSection
        header="Priority">
        {priorities.map(priority => (
          <Priority
            key={priority.text}
            backgroundColor={priority.backgroundColor}
            isSelected={todoPriority === priority.value}
            onClick={() => {
              dispatch(updateTodo(todoId, 
                { priority: priority.value },
                { priority: todoPriority },
                true
            ))}}>
            {priority.text}
          </Priority>
        ))}
      </TodoSection>
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
const Priority = styled.div`
  cursor: pointer;
  padding: 0.5rem;
  background-color: ${ ({ backgroundColor, isSelected }: IPriority ) => isSelected ? backgroundColor : 'transparent' };
  color: ${ ({ isSelected }: IPriority ) => isSelected ? 'white' : 'black' };
  border-radius: 5px;
`
interface IPriority {
  backgroundColor: string
  isSelected: boolean
}

export default TodoDateTime
