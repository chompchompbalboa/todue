//-----------------------------------------------------------------------------
// Imports
//-----------------------------------------------------------------------------
import { groupBy, orderBy } from 'lodash'
import moment from 'moment'

import { ITodo } from '@/state/todo/types'

//-----------------------------------------------------------------------------
// Resolve Visible Todos
//-----------------------------------------------------------------------------
export const resolveVisibleTodos = (
  isCompletedTodosVisible: boolean,
  todos: ITodo[]
) => {
  // If there are no todos, return a header with the current date
  if(todos.length === 0) {
    return [ moment().format('YYYY-MM-DD') ]
  }
  
  // Otherwise, initialize the return array
  let visibleTodos: ITodo['id'][] = []
  
  // Filter out completed todos if needed (per the list's setting)
  const filteredTodos = isCompletedTodosVisible
    ? todos
    : todos.filter(todo => todo.dateCompleted === null)
  
  // Group the todos by date - dateCompleted is checked first, then dateCurrent
  const todosGroupedByDate = groupBy(filteredTodos, todo => {
    return todo.dateCompleted 
      ? moment(todo.dateCompleted).format('YYYY-MM-DD')
      : moment(todo.dateCurrent).date() < moment().date()
        ? moment().format('YYYY-MM-DD')
        : moment(todo.dateCurrent).format('YYYY-MM-DD')
  })
  // The grouped dates aren't in the correct order, so we sort them here
  const orderedDates = Object.keys(todosGroupedByDate).sort()
  // Iterate through the sorted dates, adding a header and the sorted todos to the return array
  orderedDates.forEach(dateString => {
    // Add the date header
    visibleTodos.push(dateString)
    // Sort the todos, then push them to the return array
    orderBy(todosGroupedByDate[dateString], 
      [ 'dateCompleted', 'timeStart', 'timeEnd', sortByPriority, 'dateCreated' ]
    ).forEach(todo => {
      visibleTodos.push(todo.id)
    })
  })
  return visibleTodos
}

//-----------------------------------------------------------------------------
// Sort by priority
//-----------------------------------------------------------------------------
export const sortByPriority = (todo: ITodo) => {
  if(todo.priority === null) {
    return 0
  }
  return -(todo.priority)
}