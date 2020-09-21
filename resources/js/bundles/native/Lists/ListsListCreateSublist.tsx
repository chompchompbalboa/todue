//-----------------------------------------------------------------------------
// Imports
//-----------------------------------------------------------------------------
import React from 'react'
import { useDispatch } from 'react-redux'
import styled from 'styled-components/native'

import { IList } from '@/state/list/types'

import { createSublist } from '@/state/sublist/actions'
import { refreshVisibleTodos } from '@/state/todo/actions'

//-----------------------------------------------------------------------------
// Component
//-----------------------------------------------------------------------------
export const ListsCreateSublist = ({
  listId
}: IListsListCreateSublist) => {
  
  // Redux
  const dispatch = useDispatch()
  
  return (
    <ContainerTouchable
      onPress={() => {
        dispatch(createSublist(listId))
        dispatch(refreshVisibleTodos())
      }}>
      <Container>
        <CreateSublist>
          New Sublist +
        </CreateSublist>
      </Container>
    </ContainerTouchable>
  )
}

//-----------------------------------------------------------------------------
// Props
//-----------------------------------------------------------------------------
export interface IListsListCreateSublist {
  listId: IList['id']
}

//-----------------------------------------------------------------------------
// Styled Components
//-----------------------------------------------------------------------------
const ContainerTouchable = styled.TouchableWithoutFeedback``
const Container = styled.View`
`

const CreateSublist = styled.Text`
  font-family: OpenSans_400Regular;
  font-size: 20px;
`

export default ListsCreateSublist
