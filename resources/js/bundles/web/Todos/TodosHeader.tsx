//-----------------------------------------------------------------------------
// Imports
//-----------------------------------------------------------------------------
import React from 'react'
import styled from 'styled-components'

import { IList } from '@/state/list/types'

import TodosHeaderListActions from '@web/Todos/TodosHeaderListActions'
import TodosHeaderListName from '@web/Todos/TodosHeaderListName'

//-----------------------------------------------------------------------------
// Component
//-----------------------------------------------------------------------------
export const TodosHeader = ({
  listId
}: ITodosHeader) => {
  return (
      <Container>
        <TodosHeaderListName
          listId={listId}/>
        <TodosHeaderListActions
          listId={listId}/>
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
  width: 100%;
  padding: 1rem;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
`

export default TodosHeader
