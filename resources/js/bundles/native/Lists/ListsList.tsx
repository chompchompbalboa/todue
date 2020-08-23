//-----------------------------------------------------------------------------
// Imports
//-----------------------------------------------------------------------------
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import styled from 'styled-components/native'

import { IAppState } from '@/state'
import { IList } from '@/state/list/types'

import { updateActiveListId } from '@/state/active/actions'

import { AntDesign } from '@expo/vector-icons'
import ListsListSublist from '@native/Lists/ListsListSublist'

//-----------------------------------------------------------------------------
// Component
//-----------------------------------------------------------------------------
const ListsList = ({
  listId
}: IListsList) => {

  // Redux
  const dispatch = useDispatch()
  const isActiveList = useSelector((state: IAppState) => state.active.listId === listId)
  const isListLoaded = useSelector((state: IAppState) => state.list.loadedLists.has(listId))
  const listName = useSelector((state: IAppState) => state.list.allLists[listId]?.name)
  const sublists = useSelector((state: IAppState) => state.sublist.sublistsByListId[listId] || [])

  // State
  const [ isSublistsVisible, setIsSublistsVisible ] = useState(isActiveList)

  // Handle List Name press
  const handleListNamePress = () => {
    if(isActiveList && isListLoaded && isSublistsVisible) {
      setIsSublistsVisible(false)
    }
    else {
      setIsSublistsVisible(true)
      dispatch(updateActiveListId(listId))
    }
  }

  return (
    <Container>
      <ListNameTouchable
        onPress={handleListNamePress}>
        <ListName>
          <AntDesign 
          name={isSublistsVisible ? 'caretdown' : 'caretright'}
          size={14} 
          color='black'/>
          <ListNameText>
            {listName}
          </ListNameText>
        </ListName>
      </ListNameTouchable>
      <Sublists
        isSublistsVisible={isSublistsVisible}>
        {sublists.map(sublistId => (
          <ListsListSublist
            key={sublistId}
            listId={listId}
            sublistId={sublistId}/>
        ))}
      </Sublists>
    </Container>
  );
}

//-----------------------------------------------------------------------------
// Props
//-----------------------------------------------------------------------------
interface IListsList {
  listId: IList['id']
}

//-----------------------------------------------------------------------------
// Styled Components
//-----------------------------------------------------------------------------
const Container = styled.View``

const ListNameTouchable = styled.TouchableWithoutFeedback``
const ListName = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
`

const ListNameText = styled.Text`
  margin-left: 5px;
  font-size: 24px;
  font-family: OpenSans_700Bold;
`

const Sublists = styled.View`
  display: ${ ({ isSublistsVisible }: ISublists) => isSublistsVisible ? 'flex' : 'none' };
  padding-left: 26px;
`
interface ISublists {
  isSublistsVisible: boolean
}

export default ListsList
