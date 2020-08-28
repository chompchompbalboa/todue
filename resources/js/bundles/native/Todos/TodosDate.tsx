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
  const formattedDate = date.format('dddd MMMM Do')
  
  return (
    <TodosHeader
      text={date.isSame(moment(), 'day') ? 'Today' : formattedDate}/>
  )
}

//-----------------------------------------------------------------------------
// Props
//-----------------------------------------------------------------------------
interface ITodosTodoDate {
  dateString: string
}

export default TodosTodoDate
