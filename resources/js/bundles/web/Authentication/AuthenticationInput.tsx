//-----------------------------------------------------------------------------
// Imports
//-----------------------------------------------------------------------------
import React, { useState } from 'react'
import styled from 'styled-components'

//-----------------------------------------------------------------------------
// Component
//-----------------------------------------------------------------------------
const AuthenticationInput = ({
  isInputValueValid,
  label = null,
  onChange,
  placeholder,
  type = "text",
  value
}: IAuthenticationInput) => {

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
        type={type}
        isInputValueValid={isActiveInput || isInputValueValid}
        onChange={e => onChange(e.target.value)}
        onFocus={handleInputFocus}
        onBlur={handleInputBlur}
        placeholder={placeholder}
        value={value}/>
    </Container>
  )
}

//-----------------------------------------------------------------------------
// Props
//-----------------------------------------------------------------------------
interface IAuthenticationInput {
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
const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
`

const Label = styled.label`
  width: 100%;
`

const StyledInput = styled.input`
  width: 100%;
  margin: 0.375rem;
  padding: 0.5rem 0.25rem;
  border: none;
  border: ${ ({ isInputValueValid }: IStyledInput ) => isInputValueValid ? '1px solid rgb(150, 150, 150)' : '1px solid red'};
  border-radius: 4px;
  outline: none;
  font-size: 0.9rem;
  @media (max-width: 480px) {
    width: 100%;
    margin: 0.375rem 0;
  }
`
interface IStyledInput {
  isInputValueValid: boolean
}

export default AuthenticationInput
