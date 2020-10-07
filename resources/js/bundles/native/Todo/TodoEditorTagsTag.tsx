//-----------------------------------------------------------------------------
// Imports
//-----------------------------------------------------------------------------
import React from 'react' 
import { useDispatch, useSelector } from 'react-redux'
import styled from 'styled-components/native'

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
const TodoEditorTagsTag = ({
  listId,
  todoId,
  tagId,
  todoTagId
}: ITodoEditorTagsTag) => {

  // Is Tag Selected? (aka, is this tag attached to the active todo?)
  const isTagSelected = todoTagId !== undefined

  // Redux
  const dispatch = useDispatch()
  const tag = useSelector((state: IAppState) => state.tag.allTags[tagId])

  // Handle Press
  const handlePress = () => {
    if(isTagSelected) {
      dispatch(deleteTodoTag(todoTagId))
    }
    else {
      dispatch(createTodoTag(listId, todoId, tagId))
    }
  }

  if(tag) {
    return (
      <ContainerTouchable
        onPress={handlePress}>
        <Container
          backgroundColor={tag.backgroundColor}
          isTagSelected={isTagSelected}>
          <BackgroundColor
            backgroundColor={tag.backgroundColor}
            isTagSelected={isTagSelected}/>
          <Text>
            {tag.text}
          </Text>
        </Container>
      </ContainerTouchable>
    )
  }
  return null
}

//-----------------------------------------------------------------------------
// Props
//-----------------------------------------------------------------------------
interface ITodoEditorTagsTag {
  listId: IList['id']
  todoId: ITodo['id']
  tagId: ITag['id']
  todoTagId: ITodoTag['id']
}

//-----------------------------------------------------------------------------
// Styled Components
//-----------------------------------------------------------------------------
const ContainerTouchable = styled.TouchableWithoutFeedback``
const Container = styled.View`
  flex-direction: row;
  align-items: center;
  background-color: rgb(245, 245, 245);
  margin-bottom: 10px;
  border-radius: 10px;
  padding: 10px;
  border-color: ${ ({ backgroundColor, isTagSelected }: IContainer) => isTagSelected ? backgroundColor : 'rgb(245, 245, 245)' };
  border-width: 1px;
`
interface IContainer {
  backgroundColor: string
  isTagSelected: boolean
}

const Text = styled.Text`
  margin-left: 10px;
  font-family: OpenSans_400Regular;
  font-size: 18px;
`

const BackgroundColor = styled.View`
  width: 20px;
  height: 20px;
  border-radius: 20px;
  background-color: ${ ({ backgroundColor, isTagSelected }: IBackgroundColor) => isTagSelected ? backgroundColor : 'white' };
  border-color: ${ ({ backgroundColor }: IBackgroundColor) => backgroundColor };
  border-width: 1px;
`
interface IBackgroundColor {
  backgroundColor: string
  isTagSelected: boolean
}

export default TodoEditorTagsTag
