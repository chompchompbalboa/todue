//-----------------------------------------------------------------------------
// Imports
//-----------------------------------------------------------------------------
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import styled from 'styled-components/native'

import { IAppState } from '@/state'
import { IList } from '@/state/list/types'

import { updateActiveListId } from '@/state/active/actions'

import ListsListNameInput from '@native/Lists/ListsListNameInput'

//-----------------------------------------------------------------------------
// Component
//-----------------------------------------------------------------------------
const ListsListName = ({
  listId,
  setIsListsVisible
}: IListsListName) => {

  // Redux
  const dispatch = useDispatch()
  const isListLoaded = useSelector((state: IAppState) => state.list.loadedLists.has(listId))
  const listName = useSelector((state: IAppState) => state.list.allLists[listId]?.name)

  // Handle List Name press
  const handleListNamePress = () => {
    dispatch(updateActiveListId(listId))
    if(isListLoaded) {
      setIsListsVisible(false)
    }
  }

  return (
    <Container>
      {listName === null 
        ? <ListsListNameInput
            listId={listId}/>
        : <ListNameTouchable
            onPress={(handleListNamePress)}>
            <ListName>
              <ListNameText
                isListLoaded={isListLoaded}>
                {listName}
              </ListNameText>
            </ListName>
          </ListNameTouchable>
      }
    </Container>
  );
}

//-----------------------------------------------------------------------------
// Props
//-----------------------------------------------------------------------------
interface IListsListName {
  listId: IList['id']
  setIsListsVisible(nextIsListsVisible: boolean): void
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
  font-size: 24px;
  font-family: OpenSans_700Bold;
  color: ${ ({ isListLoaded }: IListNameText) => isListLoaded ? 'black' : 'rgb(170, 170, 170)' };
`
interface IListNameText {
  isListLoaded: boolean
}

export default ListsListName
