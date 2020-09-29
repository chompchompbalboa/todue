//-----------------------------------------------------------------------------
// Imports
//-----------------------------------------------------------------------------
import React from 'react'
import { useSelector } from 'react-redux'
import styled from 'styled-components/native'

import { IAppState } from '@/state'
import { ITag } from '@/state/tag/types'

import { AntDesign } from '@expo/vector-icons';

//-----------------------------------------------------------------------------
// Component
//-----------------------------------------------------------------------------
export const TagComponent = ({
  tagId,
  handleDelete
}: ITagComponent) => {
  
  // Redux
  const tagBackgroundColor = useSelector((state: IAppState) => state.tag.allTags[tagId].backgroundColor)
  const tagText = useSelector((state: IAppState) => state.tag.allTags[tagId].text)

  return (
      <Container
        backgroundColor={tagBackgroundColor}>
        <Text>{tagText}</Text>
        {handleDelete &&
          <DeleteContainerTouchable
            onPress={handleDelete}>
            <DeleteContainer>
              <AntDesign 
                name="close" 
                size={20} 
                color="white" />
            </DeleteContainer>
          </DeleteContainerTouchable>
        }
      </Container>
  )
}

//-----------------------------------------------------------------------------
// Props
//-----------------------------------------------------------------------------
interface ITagComponent {
  tagId: ITag['id']
  handleDelete?(): void
}

//-----------------------------------------------------------------------------
// Styled Components
//-----------------------------------------------------------------------------
const Container = styled.View`
  margin-left: 6px;
  margin-right: 4px;
  margin-bottom: 6px;
  padding: 5px 10px;
  border-radius: 10px;
  flex-direction: row;
  align-items: center;
  background-color: ${ ({ backgroundColor }: IContainer ) => backgroundColor };
  color: white;
`
interface IContainer {
  backgroundColor: string
}

const Text = styled.Text`
  font-size: 20px;
  font-family: OpenSans_400Regular;
  color: white;
  align-self: flex-start;
`

const DeleteContainerTouchable = styled.TouchableWithoutFeedback``
const DeleteContainer = styled.View`
  margin-left: 3px;
`

export default TagComponent
