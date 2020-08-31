//-----------------------------------------------------------------------------
// Imports
//-----------------------------------------------------------------------------
import React from 'react'
import { useSelector } from 'react-redux'

import { IAppState } from '@/state'

import Modal from '@/components/native/Modal'
import TodoBacklog from '@native/Todo/TodoBacklog'
import TodoDate from '@native/Todo/TodoDate'
import TodoText from '@native/Todo/TodoText'
import TodoPriority from '@native/Todo/TodoPriority'

//-----------------------------------------------------------------------------
// Component
//-----------------------------------------------------------------------------
const Todo = ({
  setIsTodoVisible
}: ITodoComponent) => {

  // Redux
  const activeTodoId = useSelector((state: IAppState) => state.active.todoId)

  return (
    <Modal
      closeModal={() => setIsTodoVisible(false)}>
      <TodoText
        todoId={activeTodoId}/>
      <TodoDate
        todoId={activeTodoId}
        setIsTodoVisible={setIsTodoVisible}/>
      <TodoBacklog
        todoId={activeTodoId}
        setIsTodoVisible={setIsTodoVisible}/>
      <TodoPriority
        todoId={activeTodoId}/>
    </Modal>
  )
}

//-----------------------------------------------------------------------------
// Props
//-----------------------------------------------------------------------------
interface ITodoComponent {
  setIsTodoVisible(nextIsTodoVisible: boolean): void
}

export default Todo
