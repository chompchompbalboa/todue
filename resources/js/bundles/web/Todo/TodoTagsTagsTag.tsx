//-----------------------------------------------------------------------------
// Imports
//-----------------------------------------------------------------------------
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import styled from 'styled-components'

import { IAppState } from '@/state'
import { IList } from '@/state/list/types'
import { ITag } from '@/state/tag/types'
import { ITodo } from '@/state/todo/types'
import { ITodoTag } from '@/state/todoTag/types'

import { 
  createTodoTag,
  deleteTodoTag 
} from '@/state/todoTag/actions'

//-----------------------------------------------------------------------------
// Component
//-----------------------------------------------------------------------------
export const TodoTagsTagsTag = ({
  listId,
  todoId,
  tagId,
  todoTagId
}: ITodoTagsTagsTag) => {

  // Is Tag Selected? (aka, is this tag attached to the active todo?)
  const isTagSelected = todoTagId !== undefined

  // Redux
  const dispatch = useDispatch()
  const tag = useSelector((state: IAppState) => state.tag.allTags[tagId])

  // Handle Click
  const handleClick = () => {
    if(isTagSelected) {
      dispatch(deleteTodoTag(todoTagId))
    }
    else {
      dispatch(createTodoTag(listId, todoId, tagId))
    }
  }

  return (
    <Container
      backgroundColor={tag.backgroundColor}
      isTagSelected={isTagSelected}
      onClick={handleClick}>
      <BackgroundColor
        backgroundColor={tag.backgroundColor}
        isTagSelected={isTagSelected}/>
      <Text>
        {tag.text}
      </Text>
    </Container>
  )
}

//-----------------------------------------------------------------------------
// Props
//-----------------------------------------------------------------------------
interface ITodoTagsTagsTag {
  listId: IList['id']
  todoId: ITodo['id']
  tagId: ITag['id']
  todoTagId: ITodoTag['id']
}

//-----------------------------------------------------------------------------
// Styled Components
//-----------------------------------------------------------------------------
const Container = styled.div`
  cursor: pointer;
  width: 100%;
  display: flex;
  align-items: center;
  background-color: rgb(245, 245, 245);
  margin-bottom: 0.5rem;
  border-radius: 5px;
  padding: 0.5rem;
  background-color: white;
  border: 1px solid ${ ({ backgroundColor, isTagSelected }: IContainer) => isTagSelected ? backgroundColor : 'rgb(245, 245, 245)' };
  &:hover {
    border: 1px solid ${ ({ backgroundColor }: IContainer) => backgroundColor };
  }
`
interface IContainer {
  backgroundColor: string
  isTagSelected: boolean
}

const Text = styled.div`
  margin-left: 0.5rem;
  font-size: 0.95rem;
  white-space: nowrap;
  min-width: 6rem;
`

const BackgroundColor = styled.div`
  width: 0.4rem;
  height: 0.4rem;
  border-radius: 0.4rem;
  background-color: ${ ({ backgroundColor, isTagSelected }: IBackgroundColor) => isTagSelected ? backgroundColor : 'white' };
  border: 1px solid ${ ({ backgroundColor }: IBackgroundColor) => backgroundColor };
`
interface IBackgroundColor {
  backgroundColor: string
  isTagSelected: boolean
}

export default TodoTagsTagsTag
