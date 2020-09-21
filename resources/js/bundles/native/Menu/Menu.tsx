//-----------------------------------------------------------------------------
// Imports
//-----------------------------------------------------------------------------
import React from 'react'
import styled from 'styled-components/native'

import MenuCreateTodo from '@native/Menu/MenuCreateTodo'
import MenuLists from '@native/Menu/MenuLists'
import MenuSettings from '@native/Menu/MenuSettings'

//-----------------------------------------------------------------------------
// Component
//-----------------------------------------------------------------------------
const Menu = ({
  setIsListsVisible,
  setIsSettingsVisible
}: IMenu) => {

  return (
    <Container
    style={{
      shadowOpacity: 0.75,
      shadowRadius: 10,
      shadowColor: 'rgb(200, 200, 200)',
      shadowOffset: { height: 0, width: 0 },
    }}>
      <MenuLists
        setIsListsVisible={setIsListsVisible}/>
      <MenuCreateTodo />
      <MenuSettings
        setIsSettingsVisible={setIsSettingsVisible}/>
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

export default Menu
