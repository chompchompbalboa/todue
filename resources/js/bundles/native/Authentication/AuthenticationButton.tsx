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
  <ButtonTouchable
    onPress={handleButtonPress}>
    <Button>
      <ButtonText>
        {text}
      </ButtonText>
    </Button>
  </ButtonTouchable>
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
const ButtonTouchable = styled.TouchableWithoutFeedback``
const Button = styled.View`
  width: 100%;
  margin-top: 10px;
  padding: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  background-color: rgba(100, 175, 250, 1);
`

const ButtonText = styled.Text`
  font-size: 16px;
  font-family: OpenSans_700Bold;
  color: white;
`

export default IAuthenticationButton
