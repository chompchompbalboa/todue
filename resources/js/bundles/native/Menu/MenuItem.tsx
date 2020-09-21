//-----------------------------------------------------------------------------
// Imports
//-----------------------------------------------------------------------------
import React from 'react'
import styled from 'styled-components/native'

import { FontAwesome } from '@expo/vector-icons'

//-----------------------------------------------------------------------------
// Component
//-----------------------------------------------------------------------------
const MenuItem = ({
  icon,
  justifyContent,
  onPress,
  text,
  width
}: IMenuItem) => {

  return (
    <ContainerTouchable
      onPress={onPress}>
      <Container
        justifyContent={justifyContent}
        width={width}>
        {text &&
          <Text>
            {text}
          </Text>
        }
        <FontAwesome 
          name={icon} 
          size={20} 
          color="black" />
      </Container>
    </ContainerTouchable>
  )
}

//-----------------------------------------------------------------------------
// Props
//-----------------------------------------------------------------------------
interface IMenuItem {
  icon: string
  justifyContent: string
  onPress(): void
  text?: string
  width: string
}

//-----------------------------------------------------------------------------
// Styled Components
//-----------------------------------------------------------------------------
const ContainerTouchable = styled.TouchableWithoutFeedback``
const Container = styled.View`
  width: ${ ({ width }: IContainer) => width };
  padding: 20px;
  padding-top: 15px;
  padding-bottom: 25px;
  display: flex;
  flex-direction: row;
  justify-content: ${ ({ justifyContent = 'center' }: IContainer) => justifyContent };
  align-items: center;
  background-color: white;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
`
interface IContainer {
  justifyContent?: string
  width: string
}

const Text = styled.Text`
  font-size: 21px;
  font-family: OpenSans_700Bold;
`

export default MenuItem
