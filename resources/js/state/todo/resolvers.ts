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
  todos: ITodo[]
) => {
  if(todos.length === 0) {
    return [ moment().format('YYYY-MM-DD') ]
  }
  let visibleTodos: ITodo['id'][] = []
  const todosGroupedByDate = groupBy(todos, todo => {
    return todo.dateCompleted === null && moment(todo.dateCurrent).date() < moment().date()
      ? moment().format('YYYY-MM-DD')
      : moment(todo.dateCurrent).format('YYYY-MM-DD')
  })
  const orderedDates = Object.keys(todosGroupedByDate).sort()
  orderedDates.forEach(dateString => {
    visibleTodos.push(dateString)
    orderBy(todosGroupedByDate[dateString], [ 'dateCompleted', 'dateCreated' ]).forEach(todo => {
      visibleTodos.push(todo.id)
    })
  })
  return visibleTodos
}