//-----------------------------------------------------------------------------
// Imports
//-----------------------------------------------------------------------------
import React from 'react'
import styled from 'styled-components/native'

//-----------------------------------------------------------------------------
// Component
//-----------------------------------------------------------------------------
const IAuthenticationButton = ({
  text,
  handleButtonPress
}: IIAuthenticationButton) => (
  <Button
    onPress={handleButtonPress}>
    <ButtonText>
      {text}
    </ButtonText>
  </Button>
)

//-----------------------------------------------------------------------------
// Props
//-----------------------------------------------------------------------------
interface IIAuthenticationButton {
  text: string
  handleButtonPress(): void
}

//-----------------------------------------------------------------------------
// Styled Components
//-----------------------------------------------------------------------------
const Button = styled.TouchableWithoutFeedback`
  width: 100%;
  margin-left: 0.375rem;
  padding: 0.5rem 1.25rem;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid rgb(150, 150, 150);
  border-radius: 5px;
  font-size: 14px;
  background-color: rgba(220, 220, 220, 1);
  color: black;
`

const ButtonText = styled.Text`
`

export default IAuthenticationButton
