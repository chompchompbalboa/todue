//-----------------------------------------------------------------------------
// Imports
//-----------------------------------------------------------------------------
import React, { useState } from 'react'
import styled from 'styled-components/native'

//-----------------------------------------------------------------------------
// Component
//-----------------------------------------------------------------------------
const SiteAuthenticationInput = ({
  isInputValueValid,
  onChange,
  placeholder,
  type = "text",
  value
}: ISiteAuthenticationInput) => {

  // State
  const [ isActiveInput, setIsActiveInput ] = useState(false)

  // Handle Input Blur
  const handleInputBlur = () => {
    setIsActiveInput(false)
  }

  // Handle Input Focus
  const handleInputFocus = () => {
    setIsActiveInput(true)
  }

  return (
    <Container>
      <StyledInput
        autoCapitalize={type === "email" ? "none" : "sentences"}
        isInputValueValid={isActiveInput || isInputValueValid}
        onChangeText={nextText => onChange(nextText)}
        onFocus={handleInputFocus}
        onBlur={handleInputBlur}
        placeholder={placeholder}
        secureTextEntry={type === "password"}
        value={value}/>
    </Container>
  )
}

//-----------------------------------------------------------------------------
// Props
//-----------------------------------------------------------------------------
interface ISiteAuthenticationInput {
  isInputValueValid: boolean
  onChange(nextValue: string): void
  placeholder: string
  type?: string
  value: string
}

//-----------------------------------------------------------------------------
// Styled Components
//-----------------------------------------------------------------------------
const Container = styled.View`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
`

const StyledInput = styled.TextInput`
  width: 100%;
  margin: 6px;
  padding: 10px 8px;
  border: ${ ({ isInputValueValid }: IStyledInput ) => isInputValueValid ? '1px solid rgb(180, 180, 180)' : '1px solid red'};
  border-radius: 10px;
  font-size: 17px;
  font-family: OpenSans_400Regular;
  color: black;
`
interface IStyledInput {
  isInputValueValid: boolean
}

export default SiteAuthenticationInput
