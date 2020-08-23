//-----------------------------------------------------------------------------
// Imports
//-----------------------------------------------------------------------------
import React from 'react'
import moment from 'moment'

import TodosHeader from '@native/Todos/TodosHeader'

//-----------------------------------------------------------------------------
// Component
//-----------------------------------------------------------------------------
export const TodosTodoDate = ({
  dateString
}: ITodosTodoDate) => {
  
  const date = moment(dateString)
  
  return (
    <TodosHeader
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
