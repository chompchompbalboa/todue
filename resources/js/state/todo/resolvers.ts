//-----------------------------------------------------------------------------
// Imports
//-----------------------------------------------------------------------------
import { groupBy, orderBy } from 'lodash'
import moment from 'moment'

import { IAppState } from '@/state'
import { ISublist } from '@/state/sublist/types'
import { ISublistTagState } from '@/state/sublistTag/reducers'
import { ITodo } from '@/state/todo/types'
import { ITodoTagState } from '@/state/todoTag/reducers'

//-----------------------------------------------------------------------------
// Resolve Visible Todos
//-----------------------------------------------------------------------------
export const resolveVisibleTodos = (getState: () => IAppState) => {

  const {
    active: {
      isCompletedTodosVisible,
      listId: activeListId,
      sublistId: activeSublistId
    },
    sublistTag: {
      allSublistTags,
      sublistTagsBySublistId
    },
    todo: {
      allTodos,
      todosByListId
    },
    todoTag: {
      allTodoTags,
      todoTagsByTodoId
    }
  } = getState()

  // Get the list's todos
  const todos = (todosByListId[activeListId] || []).map(currentTodoId => allTodos[currentTodoId])

  // If there are no todos, return a header with the current date
  if(todos.length === 0) {
    return [ moment().format('YYYY-MM-DD') ]
  }
  
  // Otherwise, initialize the return array
  let visibleTodos: ITodo['id'][] = []
  
  // Filters
  const filters = [
    (todo: ITodo) => filterByDateCompleted(todo, isCompletedTodosVisible),
    (todo: ITodo) => filterBySublistTags(todo, activeSublistId, allSublistTags, sublistTagsBySublistId, allTodoTags, todoTagsByTodoId)
  ]
  
  // Filter the todos
  const filteredTodos = todos.filter(todo => filters.every(filter => filter(todo)))
  
  // Group the todos by date - first by dateCompleted, then dateCurrent
  const todosGroupedByDate = groupBy(filteredTodos, todo => {
    return todo.dateCompleted 
      ? moment(todo.dateCompleted).format('YYYY-MM-DD')
      : todo.dateCurrent
        ? moment(todo.dateCurrent) < moment()
          ? moment().format('YYYY-MM-DD')
          : moment(todo.dateCurrent).format('YYYY-MM-DD')
        : 'BACKLOG'
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

  // If there are no visible todos, return a header with the current date
  if(visibleTodos.length === 0) {
    return [ moment().format('YYYY-MM-DD') ]
  }
  
  return visibleTodos
}

//-----------------------------------------------------------------------------
// Filter By Date Completed
//-----------------------------------------------------------------------------
const filterByDateCompleted = (
  todo: ITodo, 
  isCompletedTodosVisible: boolean
) => {
  return isCompletedTodosVisible ? true : todo.dateCompleted === null
}

//-----------------------------------------------------------------------------
// Filter By Sublist Tags
//-----------------------------------------------------------------------------
const filterBySublistTags = (
  todo: ITodo, 
  activeSublistId: ISublist['id'],
  allSublistTags: ISublistTagState['allSublistTags'],
  sublistTagsBySublistId: ISublistTagState['sublistTagsBySublistId'],
  allTodoTags: ITodoTagState['allTodoTags'],
  todoTagsByTodoId: ITodoTagState['todoTagsByTodoId'],
) => {
  // If there is no active sublist, bail out
  if(activeSublistId === null) {
    return true
  }
  // Get the sublist tags
  const sublistTags = sublistTagsBySublistId[activeSublistId]
  // Does the active sublist have any tags associated with it?
  if(sublistTags) {
    if(sublistTags.length === 0) {
      return true  
    }
    // Get all of the tag ids for the todo
    const todoTagsTagIds = (todoTagsByTodoId[todo.id] || []).map(todoTagId => allTodoTags[todoTagId].tagId)
    // If every sublist tag is included in the todo tags, return true
    return sublistTags.every(sublistTagId => {
      const sublistTag = allSublistTags[sublistTagId]
      return todoTagsTagIds.includes(sublistTag.tagId)
    })
  }
  // If the sublist doesn't have any tags, return true
  return true
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