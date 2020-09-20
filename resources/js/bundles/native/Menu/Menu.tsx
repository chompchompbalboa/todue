//-----------------------------------------------------------------------------
// Imports
//-----------------------------------------------------------------------------
import React from 'react'
import { useSelector } from 'react-redux'
import styled from 'styled-components/native'

import { IAppState } from '@/state'

import { FontAwesome, FontAwesome5 } from '@expo/vector-icons'

//-----------------------------------------------------------------------------
// Component
//-----------------------------------------------------------------------------
const Menu = ({
  setIsListsVisible,
  setIsSettingsVisible
}: IMenu) => {

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
      <MenuItemTouchable
        onPress={() => setIsListsVisible(true)}>
        <MenuItem
          justifyContent="space-between"
          width="62%">
          <ActiveListName>
            {activeListName}
          </ActiveListName>
          <FontAwesome 
            name="list-ul" 
            size={25} 
            color="black" />
        </MenuItem>
      </MenuItemTouchable>
      <MenuItemTouchable>
        <MenuItem
          width="19%">
          <FontAwesome5 
            name="plus" 
            size={25} 
            color="black" />
        </MenuItem>
      </MenuItemTouchable>
      <MenuItemTouchable
        onPress={() => setIsSettingsVisible(true)}>
        <MenuItem
          width="18%">
          <FontAwesome
            name="gear" 
            size={25} 
            color="black" />
        </MenuItem>
      </MenuItemTouchable>
    </Container>
  )
}

//-----------------------------------------------------------------------------
// Props
//-----------------------------------------------------------------------------
interface IMenu {
  setIsListsVisible(nextIsListsVisible: boolean): void
  setIsSettingsVisible(nextIsSettingsVisible: boolean): void
}

//-----------------------------------------------------------------------------
// Styled Components
//-----------------------------------------------------------------------------
const Container = styled.View`
  margin-left: 1.5%;
  width: 97%;
  z-index: 10;
  position: absolute;
  bottom: 0;
  left: 0;
  flex-direction: row;
  justify-content: space-between;
`

const MenuItemTouchable = styled.TouchableWithoutFeedback``
const MenuItem = styled.View`
  width: ${ ({ width }: IMenuItem) => width };
  padding: 20px;
  padding-top: 15px;
  padding-bottom: 25px;
  display: flex;
  flex-direction: row;
  justify-content: ${ ({ justifyContent = 'center' }: IMenuItem) => justifyContent };
  align-items: center;
  background-color: white;
  border-top-left-radius: 15px;
  border-top-right-radius: 15px;
`
interface IMenuItem {
  justifyContent?: string
  width: string
}

const ActiveListName = styled.Text`
  font-size: 21px;
  font-family: OpenSans_700Bold;
`

export default Menu
