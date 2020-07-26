//-----------------------------------------------------------------------------
// Imports
//-----------------------------------------------------------------------------
import React from 'react'
import styled from 'styled-components'

import { IList } from '@/state/list/types'

import TodosHeaderListCompletedTodosToggle from '@web/Todos/TodosHeaderListCompletedTodosToggle'
import TodosHeaderListSettings from '@web/Todos/TodosHeaderListSettings'
import TodosHeaderListName from '@web/Todos/TodosHeaderListName'

//-----------------------------------------------------------------------------
// Component
//-----------------------------------------------------------------------------
export const TodosHeader = ({
  listId
}: ITodosHeader) => {
  return (
      <Container>
        <NameAndSettings>
          <TodosHeaderListName />
          <TodosHeaderListSettings
            listId={listId}/>
        </NameAndSettings>
        <Actions>
          <TodosHeaderListCompletedTodosToggle
            listId={listId}/>
        </Actions>
      </Container>
  )
}

//-----------------------------------------------------------------------------
// Props
//-----------------------------------------------------------------------------
interface ITodosHeader {
  listId: IList['id']
}

//-----------------------------------------------------------------------------
// Styled Components
//-----------------------------------------------------------------------------
const Container = styled.div`
  z-index: 10;
  position: sticky;
  top: 0;
  width: 100%;
  padding: 1rem;
  padding-bottom: 0.5rem;
  display: flex;
  justify-content: space-between;
  background-color: rgb(235, 235, 235);
`

const NameAndSettings = styled.div`
  display: flex;
  align-items: flex-end;
`

const Actions = styled.div``

export default TodosHeader
