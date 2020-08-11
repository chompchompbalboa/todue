//-----------------------------------------------------------------------------
// Imports
//-----------------------------------------------------------------------------
import React from 'react'
import { useSelector } from 'react-redux'
import styled from 'styled-components'

import { IAppState } from '@/state'
import { ISublist } from '@/state/sublist/types'

import TodosHeaderSettingsSublistCreateSublistTag from '@web/Todos/TodosHeaderSettingsSublistCreateSublistTag'
import TodosHeaderSettingsSublistTagsTag from '@web/Todos/TodosHeaderSettingsSublistTagsTag'

//-----------------------------------------------------------------------------
// Component
//-----------------------------------------------------------------------------
export const TodosHeaderSettingsSublistTags = ({
  sublistId
}: ITodosHeaderSettingsSublistTags) => {
  
  // Redux
  const listId = useSelector((state: IAppState) => state.active.listId)
  const sublistTags = useSelector((state: IAppState) => state.sublistTag.sublistTagsBySublistId[sublistId] || [])
  
  return (
    <Container>
      <Header>
        Tags
      </Header>
      <Content>
        <TodosHeaderSettingsSublistCreateSublistTag
          listId={listId}
          sublistId={sublistId}/>
          <TagsContainer>
            {sublistTags.map(sublistTagId => (
              <TodosHeaderSettingsSublistTagsTag
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
interface ITodosHeaderSettingsSublistTags {
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

export default TodosHeaderSettingsSublistTags
