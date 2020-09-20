//-----------------------------------------------------------------------------
// Imports
//-----------------------------------------------------------------------------
import React from 'react'
import { useDispatch } from 'react-redux'
import styled from 'styled-components/native'

import { createList } from '@/state/list/actions'

//-----------------------------------------------------------------------------
// Component
//-----------------------------------------------------------------------------
export const ListsCreateList = () => {
  
  // Redux
  const dispatch = useDispatch()
  
  return (
    <ContainerTouchable
      onPress={() => dispatch(createList())}>
      <Container>
        <CreateList>
          New List +
        </CreateList>
      </Container>
    </ContainerTouchable>
  )
}

//-----------------------------------------------------------------------------
// Styled Components
//-----------------------------------------------------------------------------
const ContainerTouchable = styled.TouchableWithoutFeedback``
const Container = styled.View`
`

const CreateList = styled.Text`
  font-size: 24px;
  font-family: OpenSans_700Bold;
`

export default ListsCreateList
