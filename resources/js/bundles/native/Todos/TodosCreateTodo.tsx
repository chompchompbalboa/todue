//-----------------------------------------------------------------------------
// Imports
//-----------------------------------------------------------------------------
import React from 'react'
import { useDispatch } from 'react-redux'
import styled from 'styled-components/native'

import { IList } from '@/state/list/types'

import { createTodo } from '@/state/todo/actions'

//-----------------------------------------------------------------------------
// Component
//-----------------------------------------------------------------------------
export const TodosCreateTodo = ({
  listId
}: ITodosCreateTodo) => {

  // Redux
  const dispatch = useDispatch()

  return (
    <ContainerTouchable
      onPress={() => dispatch(createTodo(listId))}>
      <Container>
        <Text>
          Press Here To Add A New Todo...
        </Text>
      </Container>
    </ContainerTouchable>
  )
}

//-----------------------------------------------------------------------------
// Props
//-----------------------------------------------------------------------------
interface ITodosCreateTodo {
  listId: IList['id']
}

//-----------------------------------------------------------------------------
// Styled Components
//-----------------------------------------------------------------------------
const ContainerTouchable = styled.TouchableWithoutFeedback``
const Container = styled.View`
`

const Text = styled.Text`
  font-family: OpenSans_400Regular_Italic;
  font-size: 20px;
  color: rgb(120, 120, 120);
`

export default TodosCreateTodo
