//-----------------------------------------------------------------------------
// Imports
//-----------------------------------------------------------------------------
import React from 'react'
import { useSelector } from 'react-redux'
import styled from 'styled-components'

import { IAppState } from '@/state'
import { ISublist } from '@/state/sublist/types'

//-----------------------------------------------------------------------------
// Component
//-----------------------------------------------------------------------------
export const ListsListSublistDefaultTag = ({
  sublistId
}: IListsListSublistDefaultTag) => {
  
  // Redux
  const sublistDefaultTagBackgroundColor = useSelector((state: IAppState) => {
    const sublistDefaultTagId = state.sublist.allSublists[sublistId]?.defaultTagId
    if(sublistDefaultTagId) {
      const tag = state.tag.allTags[sublistDefaultTagId]
      if(tag) {
        return tag.backgroundColor
      }
      return null
    }
    return null
  })
  
  return (
    <Container>
      {sublistDefaultTagBackgroundColor &&
        <Tag
         backgroundColor={sublistDefaultTagBackgroundColor}/>}
    </Container>
  )
}

//-----------------------------------------------------------------------------
// Props
//-----------------------------------------------------------------------------
interface IListsListSublistDefaultTag {
  sublistId: ISublist['id']
}
                                                       
//-----------------------------------------------------------------------------
// Styled Components
//-----------------------------------------------------------------------------
const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 0.5rem;
`
                               
const Tag = styled.div`
  background-color: ${ ({ backgroundColor }: ITag) => backgroundColor };
  height: 0.4rem;
  width: 0.4rem;
  border-radius: 0.2rem;
`
interface ITag {
  backgroundColor: string
}                                                    

export default ListsListSublistDefaultTag
