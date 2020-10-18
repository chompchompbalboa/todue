//-----------------------------------------------------------------------------
// Imports
//-----------------------------------------------------------------------------
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import styled from 'styled-components'

import { CHEVRON_DOWN, CHEVRON_RIGHT } from '@/assets/icons'

import { IAppState } from '@/state'
import { IList } from '@/state/list/types'

import { updateActiveListId } from '@/state/active/actions'

import Icon from '@/components/Icon'
import ListsListNameInput from '@web/Lists/ListsListNameInput'

//-----------------------------------------------------------------------------
// Component
//-----------------------------------------------------------------------------
export const ListsListName = ({
  listId,
  isListLoaded,
  isSublistsVisible,
  setIsSublistsVisible
}: IListsListName) => {
  
  // Redux
  const dispatch = useDispatch()
  const isActiveList = useSelector((state: IAppState) => state.active.listId === listId && state.active.sublistId === null)
  const listName = useSelector((state: IAppState) => state.list.allLists[listId]?.name)
                               
  // Show the sublists when the list newly active
  useEffect(() => {
    if(isActiveList && !isSublistsVisible) {
      setIsSublistsVisible(true)
    }
  }, [ isActiveList ])
  
  return (
    <Container>
      <Name
        isActiveList={isActiveList}>
        <IconContainer
          onClick={() => {
            if(!isListLoaded) {
              dispatch(updateActiveListId(listId))
            }
            else {
              setIsSublistsVisible(!isSublistsVisible)
            }
          }}>
          <Icon
            icon={isListLoaded && isSublistsVisible ? CHEVRON_DOWN : CHEVRON_RIGHT}
            size="0.75rem"/>
        </IconContainer>
        <NameContainer
          onClick={() => {
            !isActiveList && dispatch(updateActiveListId(listId))
          }}>
          {listName
            ? listName
            : <ListsListNameInput
                listId={listId}/>}
        </NameContainer>
      </Name>
    </Container>
  )
}

//-----------------------------------------------------------------------------
// Props
//-----------------------------------------------------------------------------
interface IListsListName {
  listId: IList['id']
  isListLoaded: boolean
  isSublistsVisible: boolean
  setIsSublistsVisible(nextIsSublistsVisible: boolean): void
}
//-----------------------------------------------------------------------------
// Styled Components
//-----------------------------------------------------------------------------
const Container = styled.div`
  cursor: pointer;
`
                               
const IconContainer = styled.div`
  margin-right: 0.25rem;
`
                               
const Name = styled.div`
  padding: 0.25rem;
  padding-left: 0.75rem;
  display: flex;
  background-color: ${ ({ isActiveList }: IName ) => isActiveList ? 'rgb(245, 245, 249)' : 'transparent' };
  border-top-left-radius: 5px;
  border-bottom-left-radius: 5px;
  &:hover {
    background-color: rgb(245, 245, 249);
  }
`
interface IName {
  isActiveList: boolean
}

const NameContainer = styled.div`
  flex-grow: 1;
  font-size: 1.15rem;
  font-weight: bold;
`

export default ListsListName
