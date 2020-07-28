//-----------------------------------------------------------------------------
// Imports
//-----------------------------------------------------------------------------
import React from 'react'
import { useSelector } from 'react-redux'
import styled from 'styled-components'

import { IAppState } from '@/state'
import { ISublist } from '@/state/sublist/types'

import ListsListSublistSettingsCreateSublistTag from '@web/Lists/ListsListSublistSettingsCreateSublistTag'
import ListsListSublistSettingsTagsTag from '@web/Lists/ListsListSublistSettingsTagsTag'

//-----------------------------------------------------------------------------
// Component
//-----------------------------------------------------------------------------
export const ListsListSublistSettingsTags = ({
  sublistId
}: IListsListSublistSettingsTags) => {
  
  // Redux
  const listId = useSelector((state: IAppState) => state.active.listId)
  const sublistTags = useSelector((state: IAppState) => state.sublistTag.sublistTagsBySublistId[sublistId] || [])
  
  return (
    <Container>
      <Header>
        Tags
      </Header>
      <Content>
        <ListsListSublistSettingsCreateSublistTag
          listId={listId}
          sublistId={sublistId}/>
          <TagsContainer>
            {sublistTags.map(sublistTagId => (
              <ListsListSublistSettingsTagsTag
                key={sublistTagId}
                sublistId={sublistId}
                sublistTagId={sublistTagId}/>
            ))}
          </TagsContainer>
      </Content>
    </Container>
  )
}

//-----------------------------------------------------------------------------
// Props
//-----------------------------------------------------------------------------
interface IListsListSublistSettingsTags {
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

const Content = styled.div`
  display: flex;
  align-items: center;
`

const TagsContainer = styled.div`
  display: flex;
  align-items: center;
  flex-flow: row wrap;
`

export default ListsListSublistSettingsTags
