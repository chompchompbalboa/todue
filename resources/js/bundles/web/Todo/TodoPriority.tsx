//-----------------------------------------------------------------------------
// Imports
//-----------------------------------------------------------------------------
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import styled from 'styled-components'

import { PRIORITY } from '@/assets/icons'

import { IAppState } from '@/state'
import { ITodo } from '@/state/todo/types'

import { updateTodo } from '@/state/todo/actions'

import TodoItem from '@web/Todo/TodoItem'

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
    { value: null, text: "-", backgroundColor: "rgb(150, 150, 150)" },
    { value: 1, text: "!", backgroundColor: "rgb(255, 200, 0)" },
    { value: 2, text: "!!", backgroundColor: "rgb(250, 150, 50)" },
    { value: 3, text: "!!!", backgroundColor: "rgb(200, 0, 0)" },
  ]

  return (
      <TodoItem
        icon={PRIORITY}
        label="Priority">
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
      </TodoItem>
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
  margin-right: 0.25rem;
  padding: 0.25rem 0.5rem;
  background-color: ${ ({ backgroundColor, isSelected }: IPriority ) => isSelected ? backgroundColor : 'transparent' };
  color: ${ ({ isSelected }: IPriority ) => isSelected ? 'white' : 'black' };
  border-radius: 5px;
  &:hover {
    background-color: ${ ({ backgroundColor }: IPriority ) => backgroundColor };
    color: white;
  }
`
interface IPriority {
  backgroundColor: string
  isSelected: boolean
}

export default TodoDateTime
