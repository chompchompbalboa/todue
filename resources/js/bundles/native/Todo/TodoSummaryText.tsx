//-----------------------------------------------------------------------------
// Imports
//-----------------------------------------------------------------------------
import React, { useEffect, useRef, useState }  from 'react' 
import { useDispatch, useSelector } from 'react-redux'
import styled from 'styled-components/native'

import { IAppState } from '@/state'
import { ITodo } from '@/state/todo/types'
import { 
  IActiveEditor,
  editorConfig
} from '@native/Todo/Todo'

import { updateTodo } from '@/state/todo/actions'

import TodoItem from '@native/Todo/TodoItem'

//-----------------------------------------------------------------------------
// Component
//-----------------------------------------------------------------------------
const TodoDate = ({
  todoId,
  isTodoVisible,
  openEditor
}: ITodoDate) => {

  // Refs
  const styledTextInput = useRef(null)

  // Redux
  const dispatch = useDispatch()
  const todoText = useSelector((state: IAppState) => state.todo.allTodos[todoId]?.text)

  // State
  const [ textInputValue, setTextInputValue ] = useState(todoText as string | null)

  // Update textInputValue as needed
  useEffect(() => {
    setTextInputValue(todoText)
  }, [ todoText ])

  // Blur the input when the todo closes
  useEffect(() => {
    if(!isTodoVisible) {
      styledTextInput.current.blur()
    }
  }, [ isTodoVisible ])

  return (
    <TodoItem
      icon={editorConfig['TEXT'].icon}
      label={editorConfig['TEXT'].label}>
      <StyledTextInput
        ref={styledTextInput}
        blurOnSubmit
        multiline
        onBlur={() => {
          if(textInputValue !== todoText) {
            dispatch(updateTodo(todoId, { text: textInputValue }))
          }
        }}
        onChangeText={(nextValue: string) => setTextInputValue(nextValue)}
        onSubmitEditing={() => {
          if(textInputValue !== todoText) {
            dispatch(updateTodo(todoId, { text: textInputValue }))
          }
        }}
        scrollEnabled={false}
        value={textInputValue}/>
    </TodoItem>
  )
}

//-----------------------------------------------------------------------------
// Props
//-----------------------------------------------------------------------------
interface ITodoDate {
  todoId: ITodo['id']
  isTodoVisible: boolean
  openEditor(nextActiveEditor: IActiveEditor): void
}

//-----------------------------------------------------------------------------
// Styled Components
//-----------------------------------------------------------------------------
const StyledTextInput = styled.TextInput`
  flex: 1;
  padding-top: 0;
  padding-left: 25px;
  font-size: 20px;
  font-family: OpenSans_400Regular;
  text-align: right;
`

export default TodoDate
