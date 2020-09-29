//-----------------------------------------------------------------------------
// Imports
//-----------------------------------------------------------------------------
import React from 'react'
import { useSelector } from 'react-redux'

import { IAppState } from '@/state'
import { ITodoTag } from '@/state/todoTag/types'

import Tag from '@/components/native/Tag'

//-----------------------------------------------------------------------------
// Component
//-----------------------------------------------------------------------------
export const TodoTagsTag = ({
  todoTagId
}: ITodoTagsTag) => {

  // Redux
  const tagId = useSelector((state: IAppState) => state.todoTag.allTodoTags[todoTagId]?.tagId)

  return (
    <Tag
      tagId={tagId}
      handleDelete={() => null}/>
  )
}

//-----------------------------------------------------------------------------
// Props
//-----------------------------------------------------------------------------
interface ITodoTagsTag {
  todoTagId: ITodoTag['id']
}

export default TodoTagsTag
