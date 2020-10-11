//-----------------------------------------------------------------------------
// Imports
//-----------------------------------------------------------------------------
import React from 'react'
import styled from 'styled-components/native'

import { Feather } from '@expo/vector-icons'

//-----------------------------------------------------------------------------
// Component
//-----------------------------------------------------------------------------
const TodoSummaryQuickActions = ({
  icon,
  onPress = null,
  text
}: ITodoSummaryQuickActions) => {

  return (
    <ContainerTouchable
      onPress={onPress}>
      <Container>
        <Icon>
          <Feather
            name={icon}
            size={26}
            color={onPress !== null ? "rgb(50, 50, 50)" : "rgb(180, 180, 180)"}/>
        </Icon>
        <Text
          isActive={onPress !== null}>
          {text}
        </Text>
      </Container>
    </ContainerTouchable>
  )
}

//-----------------------------------------------------------------------------
// Props
//-----------------------------------------------------------------------------
interface ITodoSummaryQuickActions {
  icon: string
  onPress?(): void
  text: string
}

//-----------------------------------------------------------------------------
// Styled Components
//-----------------------------------------------------------------------------
const ContainerTouchable = styled.TouchableWithoutFeedback``
const Container = styled.View`
  margin: 4px;
  padding: 12px 0;
  width: 30%;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  background-color: rgb(240, 240, 240);
`
const Icon = styled.View`
  justify-content: center;
  align-items: center;
`
const Text = styled.Text`
  margin-top: 4px;
  font-size: 16px;
  font-family: OpenSans_600SemiBold;
  color: ${ ({ isActive }: IText) => isActive ? 'black' : 'rgb(150, 150, 150)' };
`
interface IText {
  isActive: boolean
}

export default TodoSummaryQuickActions
