//-----------------------------------------------------------------------------
// Imports
//-----------------------------------------------------------------------------
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import styled from 'styled-components'

import { IAppState } from '@/state'

import { updateActiveListId } from '@/state/active/actions'

//-----------------------------------------------------------------------------
// Component
//-----------------------------------------------------------------------------
export const ListsAllTodos = () => {
  
  // Redux
  const dispatch = useDispatch()
  const activeListId = useSelector((state: IAppState) => state.active.listId)
  
  return (
    <Container
      isActiveList={activeListId === 'ALL_TODOS'}
      onClick={() => dispatch(updateActiveListId('ALL_TODOS'))}>
      All Todos
    </Container>
  )
}

//-----------------------------------------------------------------------------
// Styled Components
//-----------------------------------------------------------------------------
const Container = styled.div`
  cursor: pointer;
  padding: 0.25rem;
  padding-left: 0.75rem;
  margin-left: 0.25rem;
  margin-bottom: 1rem;
  display: flex;
  background-color: ${ ({ isActiveList }: IContainer ) => isActiveList ? 'rgb(245, 245, 249)' : 'transparent' };
  font-size: 1.15rem;
  font-weight: bold;
  border-top-left-radius: 5px;
  border-bottom-left-radius: 5px;
  &:hover {
    background-color: rgb(245, 245, 249);
  }
`
interface IContainer {
  isActiveList: boolean
}

export default ListsAllTodos
