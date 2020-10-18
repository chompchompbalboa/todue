//-----------------------------------------------------------------------------
// Imports
//-----------------------------------------------------------------------------
import React, { useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import styled from 'styled-components'

import { IAppState } from '@/state'
import { ISublist } from '@/state/sublist/types'

import { updateTag } from '@/state/tag/actions'

import ColorPicker from '@/components/ColorPicker'
import Dropdown from '@/components/Dropdown'

//-----------------------------------------------------------------------------
// Component
//-----------------------------------------------------------------------------
export const ListsListSublistDefaultTag = ({
  sublistId
}: IListsListSublistDefaultTag) => {

  // Refs
  const containerRef = useRef(null)
  
  // Redux
  const dispatch = useDispatch()
  const sublistDefaultTagId = useSelector((state: IAppState) => state.sublist.allSublists[sublistId]?.defaultTagId)
  const sublistDefaultTagBackgroundColor = useSelector((state: IAppState) => {
    if(sublistDefaultTagId) {
      const tag = state.tag.allTags[sublistDefaultTagId]
      if(tag) {
        return tag.backgroundColor
      }
      return null
    }
    return null
  })

  // State
  const [ isColorPickerVisible, setIsColorPickerVisible ] = useState(false)
  
  return (
    <Container
      ref={containerRef}
      onClick={() => setIsColorPickerVisible(true)}>
      {sublistDefaultTagBackgroundColor &&
        <>
          <Tag
            backgroundColor={sublistDefaultTagBackgroundColor}/>
          <Dropdown
            containerRef={containerRef}
            closeDropdown={() => setIsColorPickerVisible(false)}
            isDropdownVisible={isColorPickerVisible}
            right="-0.25rem">
            <ColorPicker
              activeColor={sublistDefaultTagBackgroundColor}
              onColorChange={nextTagBackgroundColor => dispatch(updateTag(sublistDefaultTagId, 
                { backgroundColor: nextTagBackgroundColor },
                { backgroundColor: sublistDefaultTagBackgroundColor }
              ))}/>
          </Dropdown>
        </>
      }
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
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 0.5rem;
  height: 100%;
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
