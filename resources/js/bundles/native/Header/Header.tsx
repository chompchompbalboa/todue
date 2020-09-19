//-----------------------------------------------------------------------------
// Imports
//-----------------------------------------------------------------------------
import React from 'react'
import { useSelector } from 'react-redux'
import styled from 'styled-components/native'

import { IAppState } from '@/state'

import { Ionicons } from '@expo/vector-icons'

//-----------------------------------------------------------------------------
// Component
//-----------------------------------------------------------------------------
const Header = ({
  isListsVisible,
  setIsListsVisible
}: IHeader) => {

  // Redux
  const activeListName = useSelector((state: IAppState) => state.active.sublistId
    ? state.sublist.allSublists[state.active.sublistId]?.name
    : state.list.allLists[state.active.listId]?.name
  )

  return (
    <Container
    style={{
      shadowOpacity: 0.75,
      shadowRadius: 10,
      shadowColor: 'rgb(200, 200, 200)',
      shadowOffset: { height: 0, width: 0 },
    }}>
      <ActiveListTouchable
        onPress={() => setIsListsVisible(!isListsVisible)}>
        <ActiveList>
          <ActiveListName>
            {activeListName}
          </ActiveListName>
          <Ionicons 
            name="ios-more" 
            size={24} 
            color="rgb(150, 150, 150)" />
        </ActiveList>
      </ActiveListTouchable>
    </Container>
  )
}

//-----------------------------------------------------------------------------
// Props
//-----------------------------------------------------------------------------
interface IHeader {
  isListsVisible: boolean
  setIsListsVisible(nextIsListsVisible: boolean): void
}

//-----------------------------------------------------------------------------
// Styled Components
//-----------------------------------------------------------------------------
const Container = styled.View`
  z-index: 10;
  background-color: white;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
`

const ActiveListTouchable = styled.TouchableWithoutFeedback``
const ActiveList = styled.View`
  padding: 20px;
  padding-top: 15px;
  padding-bottom: 30px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`

const ActiveListName = styled.Text`
  font-size: 26px;
  font-weight: bold;
`

export default Header
