//-----------------------------------------------------------------------------
// Imports
//-----------------------------------------------------------------------------
import React from 'react' 
import { useSelector } from 'react-redux'
import styled from 'styled-components/native'

import { IAppState } from '@/state'
import { ITodo } from '@/state/todo/types'
import { ITodoTag } from '@/state/todoTag/types'

import TodoEditorTagsTag from '@native/Todo/TodoEditorTagsTag'

//-----------------------------------------------------------------------------
// Component
//-----------------------------------------------------------------------------
const TodoEditorTags = ({
  todoId,
  isVisible
}: ITodoEditorTags) => {

  // Redux
  const listId = useSelector((state: IAppState) => state.active.listId)
  const listTags = useSelector((state: IAppState) => {
    if(listId) {
      return state.tag.tagsByListId[listId] || []
    }
    return []
  })
  const todoTagIdsByTagId = useSelector((state: IAppState) => {
    const output = {} as { [tagId: string]: ITodoTag['id'] }
    const todoTags = state.todoTag.todoTagsByTodoId[todoId]
    if(todoTags) {
      todoTags.forEach(todoTagId => {
        const tagId = state.todoTag.allTodoTags[todoTagId]?.tagId
        if(tagId) {
          output[tagId] = todoTagId
        }
      })
    }
    return output
  })

  return (
    <Container
      isVisible={isVisible}>
      {listTags && listTags.map(tagId => (
        <TodoEditorTagsTag
          key={tagId}
          listId={listId}
          todoId={todoId}
          tagId={tagId}
          todoTagId={todoTagIdsByTagId[tagId]}/>
      ))}
    </Container>
  )
}

//-----------------------------------------------------------------------------
// Props
//-----------------------------------------------------------------------------
interface ITodoEditorTags {
  todoId: ITodo['id']
  isVisible: boolean
}

//-----------------------------------------------------------------------------
// Styled Components
//-----------------------------------------------------------------------------
const Container = styled.View`
  display: ${ ({ isVisible }: IContainer) => isVisible ? 'flex' : 'none' };
  margin: 10px 0;
`
interface IContainer {
  isVisible: boolean
}

export default TodoEditorTags
