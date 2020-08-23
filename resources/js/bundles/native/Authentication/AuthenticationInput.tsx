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
  label = null,
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
      {label &&
        <Label>{label}:</Label>
      }
      <StyledInput
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
  label?: string
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

const Label = styled.Text`
  width: 100%;
`

const StyledInput = styled.TextInput`
  width: 100%;
  margin: 6px;
  padding: 8px 4px;
  border: none;
  border: ${ ({ isInputValueValid }: IStyledInput ) => isInputValueValid ? '1px solid rgb(150, 150, 150)' : '1px solid red'};
  border-radius: 4px;
  font-size: 14px;
`
interface IStyledInput {
  isInputValueValid: boolean
}

export default SiteAuthenticationInput
