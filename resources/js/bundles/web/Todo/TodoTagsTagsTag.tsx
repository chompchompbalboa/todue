//-----------------------------------------------------------------------------
// Imports
//-----------------------------------------------------------------------------
import React from 'react'
import { useSelector } from 'react-redux'
import styled from 'styled-components'

import { IAppState } from '@/state'
import { ITag } from '@/state/tag/types'

//-----------------------------------------------------------------------------
// Component
//-----------------------------------------------------------------------------
export const TodoTagsTagsTag = ({
  tagId
}: ITodoTagsTagsTag) => {
  
  // Redux
  const tagBackgroundColor = useSelector((state: IAppState) => state.tag.allTags[tagId].backgroundColor)
  const tagText = useSelector((state: IAppState) => state.tag.allTags[tagId].text)

  return (
      <Container
        backgroundColor={tagBackgroundColor}>
        {tagText}
      </Container>
  )
}

//-----------------------------------------------------------------------------
// Props
//-----------------------------------------------------------------------------
interface ITodoTagsTagsTag {
  tagId: ITag['id']
}

//-----------------------------------------------------------------------------
// Styled Components
//-----------------------------------------------------------------------------
const Container = styled.div`
  background-color: ${ ({ backgroundColor }: IContainer ) => backgroundColor };
`
interface IContainer {
  backgroundColor: string
}

export default TodoTagsTagsTag
