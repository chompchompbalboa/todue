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
    <KeyboardAwareScrollView
      extraScrollHeight={20}
      keyboardOpeningTime={Number.MAX_SAFE_INTEGER}
      stickyHeaderIndices={[0]}
      style={{
        height: '75%',
        width: '100%',
        backgroundColor: 'white',
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20
      }}>
      {children}
    </KeyboardAwareScrollView>
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

export default Modal
