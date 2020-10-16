//-----------------------------------------------------------------------------
// Imports
//-----------------------------------------------------------------------------
import React, { useRef, useState } from 'react'
import moment from 'moment'
import { useDispatch, useSelector } from 'react-redux'
import styled from 'styled-components'

import { CALENDAR } from '@/assets/icons'

import { IAppState } from '@/state'
import { ITodo } from '@/state/todo/types'

import { updateTodo } from '@/state/todo/actions'

import Datepicker from '@/components/Datepicker'
import Dropdown from '@/components/Dropdown'
import TodoItem from '@web/Todo/TodoItem'

//-----------------------------------------------------------------------------
// Component
//-----------------------------------------------------------------------------
export const TodoDate = ({
  todoId
}: ITodoDate) => {
  
  // Refs
  const containerRef = useRef()

  // Redux
  const dispatch = useDispatch()
  const todoDateCurrent = useSelector((state: IAppState) => {
    const dateCurrent = state.todo.allTodos[todoId]?.dateCurrent
    if(dateCurrent) {
      if(moment(dateCurrent).isBefore(moment(), 'day')) {
        return moment().format('YYYY-MM-DD HH:mm:ss')
      }
      return dateCurrent
    }
    return null
  })
  
  // State
  const [ isDropdownVisible, setIsDropdownVisible ] = useState(false)

  return (
    <TodoItem
      icon={CALENDAR}
      label="Date">
      <Container
        ref={containerRef}>
        <DateCurrent
          onClick={() => setIsDropdownVisible(true)}>
          {todoDateCurrent
            ? moment(todoDateCurrent).format('dddd MMMM Do')
            : 'None'}
        </DateCurrent>
        <Dropdown
          containerRef={containerRef}
          closeDropdown={() => setIsDropdownVisible(false)}
          isDropdownVisible={isDropdownVisible}
          right="0">
          <Datepicker
            value={todoDateCurrent}
            onDateChange={nextDate => {
              dispatch(updateTodo(todoId, 
                { dateCurrent: moment(nextDate).format('YYYY-MM-DD HH:mm:ss') },
                { dateCurrent: todoDateCurrent },
                true
              ))
          }}/>
        </Dropdown>
      </Container>
    </TodoItem>
  )
}

//-----------------------------------------------------------------------------
// Props
//-----------------------------------------------------------------------------
interface ITodoDate {
  todoId: ITodo['id']
}

//-----------------------------------------------------------------------------
// Styled Components
//-----------------------------------------------------------------------------
const Container = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
`

const DateCurrent = styled.div`
  cursor: pointer;
  text-align: right;
`

export default TodoDate
