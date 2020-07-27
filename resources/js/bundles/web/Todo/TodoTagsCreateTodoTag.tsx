//-----------------------------------------------------------------------------
// Imports
//-----------------------------------------------------------------------------
import React from 'react'
import randomColor from 'randomcolor'
import { useDispatch, useSelector } from 'react-redux'

import { IAppState } from '@/state'
import { ITag } from '@/state/tag/types'
import { ITodo } from '@/state/todo/types'

import { createListTag } from '@/state/tag/actions'
import { createTodoTag } from '@/state/todoTag/actions'

import ListTagsDropdown from '@web/Tags/ListTagsDropdown'

//-----------------------------------------------------------------------------
// Component
//-----------------------------------------------------------------------------
export const TodoTagsCreateTodoTag = ({
  todoId
}: ITodoTagsCreateTodoTag) => {
  
  // Redux
  const dispatch = useDispatch()
  const listId = useSelector((state: IAppState) => state.active.listId)
  
  // Create List Tag
  const handleCreateListTag = (tagText: string) => {
    dispatch(createListTag(listId, todoId, tagText, randomColor() ))
  }
  
  // Create Todo Tag
  const handleCreateTodoTag = (tagId: ITag['id']) => {
    dispatch(createTodoTag(listId, todoId, tagId))
  }

  return (
    <ListTagsDropdown
      listId={listId}
      handleTagCreate={handleCreateListTag}
      handleTagSelect={handleCreateTodoTag}/>
  )
}

//-----------------------------------------------------------------------------
// Props
//-----------------------------------------------------------------------------
interface ITodoTagsCreateTodoTag {
  todoId: ITodo['id']
}

export default TodoTagsCreateTodoTag
