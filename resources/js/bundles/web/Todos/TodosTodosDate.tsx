//-----------------------------------------------------------------------------
// Imports
//-----------------------------------------------------------------------------
import React from 'react'
import moment from 'moment'

import TodosTodosHeader from '@web/Todos/TodosTodosHeader'

//-----------------------------------------------------------------------------
// Component
//-----------------------------------------------------------------------------
export const TodosTodoDate = ({
  dateString
}: ITodosTodoDate) => {
  
  const date = moment(dateString)
  
  return (
    <TodosTodosHeader
      text={date.format('dddd MMMM Do') + (date.isSame(moment(), 'day') ? ' (Today)' : '')}/>
  )
}

//-----------------------------------------------------------------------------
// Props
//-----------------------------------------------------------------------------
interface ITodosTodoDate {
  dateString: string
}

export default TodosTodoDate
