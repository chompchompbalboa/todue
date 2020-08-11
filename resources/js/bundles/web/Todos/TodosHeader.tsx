//-----------------------------------------------------------------------------
// Imports
//-----------------------------------------------------------------------------
import React from 'react'
import styled from 'styled-components'

import { IList } from '@/state/list/types'
import { ISublist } from '@/state/sublist/types'

import TodosHeaderCompletedTodosToggle from '@web/Todos/TodosHeaderCompletedTodosToggle'
import TodosHeaderSettings from '@web/Todos/TodosHeaderSettings'
import TodosHeaderName from '@web/Todos/TodosHeaderName'

//-----------------------------------------------------------------------------
// Component
//-----------------------------------------------------------------------------
export const TodosHeader = ({
  listId,
  sublistId
}: ITodosHeader) => {
  
  // Is List or Sublist?
  const isListOrSublist = sublistId === null ? 'LIST' : 'SUBLIST'
  
  return (
      <Container>
        <NameAndSettings>
          <TodosHeaderName
            listId={listId}
            sublistId={sublistId}
            isListOrSublist={isListOrSublist}/>
          <TodosHeaderSettings
            listId={listId}
            sublistId={sublistId}
            isListOrSublist={isListOrSublist}/>
        </NameAndSettings>
        <Actions>
          <TodosHeaderCompletedTodosToggle />
        </Actions>
      </Container>
  )
}

//-----------------------------------------------------------------------------
// Props
//-----------------------------------------------------------------------------
interface ITodosHeader {
  listId: IList['id']
  sublistId: ISublist['id']
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
