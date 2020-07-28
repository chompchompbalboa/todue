//-----------------------------------------------------------------------------
// Imports
//-----------------------------------------------------------------------------
import React from 'react'
import { useDispatch } from 'react-redux'

import { IList } from '@/state/list/types'
import { ISublist } from '@/state/sublist/types'
import { ITag } from '@/state/tag/types'

import { createSublistTag } from '@/state/sublistTag/actions'
import { refreshVisibleTodos } from '@/state/todo/actions'

import ListTagsDropdown from '@web/Tags/ListTagsDropdown'

//-----------------------------------------------------------------------------
// Component
//-----------------------------------------------------------------------------
export const ListsListSublistSettingsCreateSublistTag = ({
  listId,
  sublistId
}: IListsListSublistSettingsCreateSublistTag) => {
  
  // Redux
  const dispatch = useDispatch()

  // Handle Tag Select
  const handleTagSelect = (tagId: ITag['id']) => {
    dispatch(createSublistTag(listId, sublistId, tagId))
    dispatch(refreshVisibleTodos())
  }
  
  return (
    <ListTagsDropdown
      listId={listId}
      handleTagSelect={handleTagSelect}/>
  )
}

//-----------------------------------------------------------------------------
// Props
//-----------------------------------------------------------------------------
interface IListsListSublistSettingsCreateSublistTag {
  listId: IList['id']
  sublistId: ISublist['id']
}

export default ListsListSublistSettingsCreateSublistTag
