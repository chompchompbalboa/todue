//-----------------------------------------------------------------------------
// Imports
//-----------------------------------------------------------------------------
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import styled from 'styled-components'

import { DELETE } from '@/assets/icons'

import { IAppState } from '@/state'
import { ITodoTag } from '@/state/todoTag/types'

import { deleteTodoTag } from '@/state/todoTag/actions'

import Icon from '@/components/Icon'

//-----------------------------------------------------------------------------
// Component
//-----------------------------------------------------------------------------
export const TodoTagsTagsTag = ({
  todoTagId
}: ITodoTagsTagsTag) => {
  
  // Redux
  const dispatch = useDispatch()
  const tagId = useSelector((state: IAppState) => state.todoTag.allTodoTags[todoTagId].tagId)
  const tagBackgroundColor = useSelector((state: IAppState) => state.tag.allTags[tagId].backgroundColor)
  const tagText = useSelector((state: IAppState) => state.tag.allTags[tagId].text)

  return (
      <Container
        backgroundColor={tagBackgroundColor}>
        <Text>{tagText}</Text>
        <DeleteContainer
          onClick={() => dispatch(deleteTodoTag(todoTagId))}>
          <Icon
            icon={DELETE}/>
        </DeleteContainer>
      </Container>
  )
}

//-----------------------------------------------------------------------------
// Props
//-----------------------------------------------------------------------------
interface ITodoTagsTagsTag {
  todoTagId: ITodoTag['id']
}

//-----------------------------------------------------------------------------
// Styled Components
//-----------------------------------------------------------------------------
const Container = styled.div`
  margin-left: 0.35rem;
  margin-bottom: 0.35rem;
  padding: 0.25rem;
  padding-left: 0.5rem;
  border-radius: 5px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: ${ ({ backgroundColor }: IContainer ) => backgroundColor };
  color: white;
`
interface IContainer {
  backgroundColor: string
}

const Text = styled.div``

const DeleteContainer = styled.div`
  cursor: pointer;
  margin-left: 0.25rem;
  display: flex;
  justify-content: center;
  align-items: center;
  &:hover {
    color: rgb(230, 230, 230);
  }
`

export default TodoTagsTagsTag
