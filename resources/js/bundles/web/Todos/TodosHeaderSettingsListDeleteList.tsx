//-----------------------------------------------------------------------------
// Imports
//-----------------------------------------------------------------------------
import React from 'react'
import { useDispatch } from 'react-redux'
import styled from 'styled-components'

import { IList } from '@/state/list/types'

import {
  deleteList
} from '@/state/list/actions'

//-----------------------------------------------------------------------------
// Component
//-----------------------------------------------------------------------------
export const TodosHeaderDeleteList = ({
  listId
}: ITodosHeaderDeleteList) => {

  // Redux
  const dispatch = useDispatch()

  return (
    <Container>
      <DeleteButton
        onClick={() => dispatch(deleteList(listId))}>
        Delete List
      </DeleteButton>
    </Container>
  )
}

//-----------------------------------------------------------------------------
// Props
//-----------------------------------------------------------------------------
interface ITodosHeaderDeleteList {
  listId: IList['id']
}

//-----------------------------------------------------------------------------
// Styled Components
//-----------------------------------------------------------------------------
const Container = styled.div`
  padding: 0.5rem;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`

const DeleteButton = styled.div`
  cursor: pointer;
  padding: 0.3rem 0.6rem;
  white-space: nowrap;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  &:hover {
    background-color: rgb(200, 0, 0);
    color: white;
  }
`

export default TodosHeaderDeleteList
