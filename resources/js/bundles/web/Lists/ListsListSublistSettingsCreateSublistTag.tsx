//-----------------------------------------------------------------------------
// Imports
//-----------------------------------------------------------------------------
import React from 'react'
import { useSelector } from 'react-redux'
import styled from 'styled-components'

import { IAppState } from '@/state'
import { ISublist } from '@/state/sublist/types'

import ListTagsDropdown from '@web/Tags/ListTagsDropdown'

//-----------------------------------------------------------------------------
// Component
//-----------------------------------------------------------------------------
export const ListsListSublistSettingsCreateSublistTag = ({
  sublistId
}: IListsListSublistSettingsCreateSublistTag) => {
  
  // Redux
  const listId = useSelector((state: IAppState) => state.active.listId)
  
  const handleTagCreate = () => {
    console.log('handleTagCreate')
  }
  
  const handleTagSelect = () => {
    console.log('handleTagSelect')
  }
  
  return (
    <Container>
      <Header>
        Tags
      </Header>
      <ListTagsDropdown
        listId={listId}
        handleTagCreate={handleTagCreate}
        handleTagSelect={handleTagSelect}/>
    </Container>
  )
}

//-----------------------------------------------------------------------------
// Props
//-----------------------------------------------------------------------------
interface IListsListSublistSettingsCreateSublistTag {
  sublistId: ISublist['id']
}

//-----------------------------------------------------------------------------
// Styled Components
//-----------------------------------------------------------------------------
const Container = styled.div`
  position: relative;
  padding: 1rem;
`

const Header = styled.div``

export default ListsListSublistSettingsCreateSublistTag
