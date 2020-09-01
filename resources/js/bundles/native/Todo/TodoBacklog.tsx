//-----------------------------------------------------------------------------
// Imports
//-----------------------------------------------------------------------------
import React, { useEffect, useState } from 'react' 
import moment from 'moment'
import { useDispatch, useSelector } from 'react-redux'
import styled from 'styled-components/native'

import { IAppState } from '@/state'
import { ITodo } from '@/state/todo/types'

import { updateTodo } from '@/state/todo/actions'

//-----------------------------------------------------------------------------
// Component
//-----------------------------------------------------------------------------
const TodoDate = ({
  todoId
}: ITodoDate) => {

  // Redux
  const dispatch = useDispatch()
  const todoDateCurrent = useSelector((state: IAppState) => state.todo.allTodos[todoId]?.dateCurrent)
  const todoTimeStart = useSelector((state: IAppState) => state.todo.allTodos[todoId]?.timeStart)
  const todoTimeEnd = useSelector((state: IAppState) => state.todo.allTodos[todoId]?.timeEnd)

  // State
  const [ isTodoBacklogged, setIsTodoBacklogged ] = useState(todoDateCurrent === null)

  // Update local state as needed
  useEffect(() => {
    if(todoDateCurrent === null && isTodoBacklogged !== true) {
      setIsTodoBacklogged(true)
    } 
    if (todoDateCurrent !== null && isTodoBacklogged !== false) {
      setIsTodoBacklogged(false)
    }
  }, [ todoDateCurrent ])

  return (
    <Container>
      <ButtonTouchable
        onPress={() => {
          //setIsTodoBacklogged(true)
          setTimeout(() => {
            dispatch(updateTodo(
              todoId, 
              { dateCurrent: todoDateCurrent === null ? moment().format('YYYY-MM-DD HH:mm:ss') : null, timeStart: null, timeEnd: null },
              { dateCurrent: todoDateCurrent, timeStart: todoTimeStart, timeEnd: todoTimeEnd },
              true 
            ))
          }, 0)
        }}>
        <Button
          isTodoBacklogged={isTodoBacklogged}>
          <ButtonText
            isTodoBacklogged={isTodoBacklogged}>
            Backlog
          </ButtonText>
        </Button>
      </ButtonTouchable>
    </Container>
  )
}

//-----------------------------------------------------------------------------
// Props
//-----------------------------------------------------------------------------
interface ITodoDate {
  todoId: ITodo['id']
}

//-----------------------------------------------------------------------------
// Styled Components
//-----------------------------------------------------------------------------
const Container = styled.View`
  margin: 10px 0;
  padding: 0 15px;
  display: flex;
  justify-content: center;
  align-items: center;
`

const ButtonTouchable = styled.TouchableNativeFeedback``
const Button = styled.View`
  padding: 10px 25px;
  background-color: ${ ({ isTodoBacklogged }: IButton) => isTodoBacklogged ? 'rgb(0, 168, 25)' : 'rgb(235, 235, 235)' };
  border-radius: 10px;
  justify-content: center;
  align-items: center;
`
interface IButton {
  isTodoBacklogged: boolean
}

const ButtonText = styled.Text`
  font-size: 20px;
  font-family: OpenSans_400Regular;
  color: ${ ({ isTodoBacklogged }: IButtonText) => isTodoBacklogged ? 'white' : 'black' };
`
interface IButtonText {
  isTodoBacklogged: boolean
}

export default TodoDate
