//-----------------------------------------------------------------------------
// Imports
//-----------------------------------------------------------------------------
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import styled from 'styled-components/native'

import { IAppState } from '@/state'
import { IList } from '@/state/list/types'

import { updateActiveListId } from '@/state/active/actions'

import ListsListSublist from '@native/Lists/ListsListSublist'

//-----------------------------------------------------------------------------
// Component
//-----------------------------------------------------------------------------
const ListsList = ({
  listId,
  setIsListsVisible
}: IListsList) => {

  // Redux
  const dispatch = useDispatch()
  const isListLoaded = useSelector((state: IAppState) => state.list.loadedLists.has(listId))
  const listName = useSelector((state: IAppState) => state.list.allLists[listId]?.name)
  const sublists = useSelector((state: IAppState) => state.sublist.sublistsByListId[listId] || [])

  // Handle List Name press
  const handleListNamePress = () => {
    dispatch(updateActiveListId(listId))
    if(isListLoaded) {
      setIsListsVisible(false)
    }
  }

  return (
    <Container>
      <ListNameTouchable
        onPress={(handleListNamePress)}>
        <ListName>
          <ListNameText
            isListLoaded={isListLoaded}>
            {listName}
          </ListNameText>
        </ListName>
      </ListNameTouchable>
      <Sublists>
        {sublists.map(sublistId => (
          <ListsListSublist
            key={sublistId}
            listId={listId}
            sublistId={sublistId}
            setIsListsVisible={setIsListsVisible}/>
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
  setIsListsVisible(nextIsListsVisible: boolean): void
}

//-----------------------------------------------------------------------------
// Styled Components
//-----------------------------------------------------------------------------
const Container = styled.View`
  padding: 15px;
  padding-bottom: 5px;
`

const ListNameTouchable = styled.TouchableWithoutFeedback``
const ListName = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
`

const ListNameText = styled.Text`
  font-size: 24px;
  font-family: OpenSans_700Bold;
  color: ${ ({ isListLoaded }: IListNameText) => isListLoaded ? 'black' : 'rgb(170, 170, 170)' };
  margin-bottom: 5px;
`
interface IListNameText {
  isListLoaded: boolean
}

const Sublists = styled.View`
  display: flex;
  padding-left: 15px;
`

export default ListsList
