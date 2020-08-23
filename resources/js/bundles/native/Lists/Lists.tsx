//-----------------------------------------------------------------------------
// Imports
//-----------------------------------------------------------------------------
import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import styled from 'styled-components/native'

import { IAppState } from '@/state'

import { AntDesign } from '@expo/vector-icons'
import ListsList from '@native/Lists/ListsList'

//-----------------------------------------------------------------------------
// Component
//-----------------------------------------------------------------------------
const Lists = () => {

  // Redux
  const activeListName = useSelector((state: IAppState) => state.active.sublistId
    ? state.sublist.allSublists[state.active.sublistId]?.name
    : state.list.allLists[state.active.listId]?.name
  )
  const lists = useSelector((state: IAppState) => state.list.lists)

  // State
  const [ isListsVisible, setIsListsVisible ] = useState(false)

  return (
    <Container>
      <ActiveListTouchable
        onPress={() => setIsListsVisible(!isListsVisible)}>
        <ActiveList>
          <AntDesign 
            name={isListsVisible ? 'caretdown' : 'caretright'}
            size={16} 
            color='black'/>
          <ActiveListName>
            {activeListName}
          </ActiveListName>
        </ActiveList>
      </ActiveListTouchable>
      <ListsContainer
        isListsVisible={isListsVisible}>
        {lists.map(listId => (
          <ListsList
            key={listId}
            listId={listId}/>
        ))}
      </ListsContainer>
    </Container>
  )
}

//-----------------------------------------------------------------------------
// Styled Components
//-----------------------------------------------------------------------------
const Container = styled.View`
  padding: 10px 20px;
  background-color: white;
`

const ActiveListTouchable = styled.TouchableWithoutFeedback``
const ActiveList = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
`

const ActiveListName = styled.Text`
  margin-left: 10px;
  font-size: 30px;
  font-weight: bold;
`

const ListsContainer = styled.View`
  display: ${ ({ isListsVisible }: IListsContainer) => isListsVisible ? 'flex' : 'none' };
  padding: 10px;
`
interface IListsContainer {
  isListsVisible: boolean
}

export default Lists
