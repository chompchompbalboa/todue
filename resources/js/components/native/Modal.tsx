//-----------------------------------------------------------------------------
// Imports
//-----------------------------------------------------------------------------
import React from 'react'
import styled from 'styled-components/native'

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
    <ModalContent>
      {children}
    </ModalContent>
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

const ModalContent = styled.View`
  height: 75%;
  width: 100%;
  padding: 15px;
  background-color: white;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  border-width: 1px;
  border-color: rgb(200, 200, 200);
`

export default Modal
