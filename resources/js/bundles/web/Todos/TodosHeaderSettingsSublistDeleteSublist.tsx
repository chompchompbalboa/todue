//-----------------------------------------------------------------------------
// Imports
//-----------------------------------------------------------------------------
import React from 'react'
import { useDispatch } from 'react-redux'
import styled from 'styled-components'

import { ISublist } from '@/state/sublist/types'

import {
  deleteSublist
} from '@/state/sublist/actions'

//-----------------------------------------------------------------------------
// Component
//-----------------------------------------------------------------------------
export const TodosHeaderSettingsSublistDeleteSublist = ({
  sublistId
}: ITodosHeaderSettingsSublistDeleteSublist) => {

  // Redux
  const dispatch = useDispatch()

  return (
    <Container>
      <DeleteButton
        onClick={() => dispatch(deleteSublist(sublistId))}>
        Delete Sublist
      </DeleteButton>
    </Container>
  )
}

//-----------------------------------------------------------------------------
// Props
//-----------------------------------------------------------------------------
interface ITodosHeaderSettingsSublistDeleteSublist {
  sublistId: ISublist['id']
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
  border-radius: 5px;
  &:hover {
    background-color: rgb(200, 0, 0);
    color: white;
  }
`

export default TodosHeaderSettingsSublistDeleteSublist
