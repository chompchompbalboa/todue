//-----------------------------------------------------------------------------
// Imports
//-----------------------------------------------------------------------------
import React from 'react'
import styled from 'styled-components/native'

import { Feather } from '@expo/vector-icons'

//-----------------------------------------------------------------------------
// Component
//-----------------------------------------------------------------------------
export const TodoItem = ({
  children,
  icon,
  label,
  onPress,
  text
}: ITodoItem) => {
  return (
    <ContainerTouchable
      onPress={onPress}>
      <Container>
        <LabelContainer>
          <LabelIcon>
            <Feather
              name={icon}
              size={24}
              color="rgb(50, 50, 50)"/>
          </LabelIcon>
          <Label>
            {label}
          </Label>
        </LabelContainer>
        <ContentContainer>
          {children || <Text>{text || "→"}</Text>}
        </ContentContainer>
      </Container>
    </ContainerTouchable>
  )
}

//-----------------------------------------------------------------------------
// Props
//-----------------------------------------------------------------------------
interface ITodoItem {
  children?: any
  icon: string
  label: string
  onPress?(): void
  text?: string
}

//-----------------------------------------------------------------------------
// Styled Components
//-----------------------------------------------------------------------------
const ContainerTouchable = styled.TouchableWithoutFeedback``
const Container = styled.View`
  width: 100%;
  padding: 10px 20px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`

const LabelContainer = styled.View`
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
`

const Label = styled.Text`
  font-size: 19px;
  font-family: OpenSans_600SemiBold;
`

const LabelIcon = styled.View`
  margin-right: 10px;
`

const ContentContainer = styled.View`
  flex: 1;
  flex-direction: row;
  justify-content: flex-end;
`

const Text = styled.Text`
  font-size: 20px;
  font-family: OpenSans_400Regular;
`

export default TodoItem
