//-----------------------------------------------------------------------------
// Imports
//-----------------------------------------------------------------------------
import React from 'react'
import { useSelector } from 'react-redux'
import styled from 'styled-components'

import { DELETE } from '@/assets/icons'

import { IAppState } from '@/state'
import { ITag } from '@/state/tag/types'

import Icon from '@/components/Icon'

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
          <DeleteContainer
            onClick={handleDelete}>
            <Icon
              icon={DELETE}/>
          </DeleteContainer>
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
const Container = styled.div`
  margin-left: 0.35rem;
  margin-bottom: 0.35rem;
  padding: 0.25rem 0.5rem;
  padding-left: 0.5rem;
  border-radius: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: ${ ({ backgroundColor }: IContainer ) => backgroundColor };
  color: white;
`
interface IContainer {
  backgroundColor: string
}

const Text = styled.div`
  white-space: nowrap;
`

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

export default TagComponent
