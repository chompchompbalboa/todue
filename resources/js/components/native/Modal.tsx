//-----------------------------------------------------------------------------
// Imports
//-----------------------------------------------------------------------------
import React from 'react'
import styled from 'styled-components/native'

import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'

//-----------------------------------------------------------------------------
// Component
//-----------------------------------------------------------------------------
const Modal = ({
  children,
  closeModal
}: IModal) => (
  <Container
    animationType="slide"
    transparent>
    <CloseModalTouchable
      onPress={() => closeModal()}>
      <CloseModal />
    </CloseModalTouchable>
    <Content
      style={{
        height: '75%',
        width: '100%',
        shadowOpacity: 0.75,
        shadowRadius: 10,
        shadowColor: 'rgb(150, 150, 150)',
        shadowOffset: { height: 0, width: 0 },
      }}>
        <KeyboardAwareScrollView
          extraScrollHeight={20}
          style={{
            height: '100%',
            width: '100%',
            backgroundColor: 'white',
            borderTopLeftRadius: 10,
            borderTopRightRadius: 10,
          }}>
          {children}
          </KeyboardAwareScrollView>
    </Content>
  </Container>
)

//-----------------------------------------------------------------------------
// Props
//-----------------------------------------------------------------------------
interface IModal {
  children?: any
  closeModal(): void
}

//-----------------------------------------------------------------------------
// Styled Components
//-----------------------------------------------------------------------------
const Container = styled.Modal`
  height: 100%;
  width: 100%;
`

const CloseModalTouchable = styled.TouchableWithoutFeedback``
const CloseModal = styled.View`
  height: 25%;
  width: 100%;
`

const Content = styled.View``

export default Modal
