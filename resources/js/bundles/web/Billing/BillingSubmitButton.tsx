//-----------------------------------------------------------------------------
// Imports
//-----------------------------------------------------------------------------
import React from 'react'
import styled from 'styled-components'

//-----------------------------------------------------------------------------
// Component
//-----------------------------------------------------------------------------
const BillingSubmitButton = ({
  isDisabled = false,
  text
}: IBillingSubmitButton) => {
  
  return (
    <StyledButton
      data-testid="BillingSubmitButton"
      disabled={isDisabled}
      isDisabled={isDisabled}>
      {text}
    </StyledButton>
  )
}

//-----------------------------------------------------------------------------
// Props
//-----------------------------------------------------------------------------
interface IBillingSubmitButton {
  isDisabled?: boolean
  text: string
}

//-----------------------------------------------------------------------------
// Styled Components
//-----------------------------------------------------------------------------
const StyledButton = styled.button`
  cursor: ${ ({ isDisabled }: IStyledButton) => isDisabled ? 'not-allowed' : 'pointer' };
  min-width: 6rem;
  padding: 0.5rem 0.7rem;
  white-space: nowrap;
  border: none;
  outline: 0;
  background-color: ${ ({ isDisabled }: IStyledButton) => isDisabled ? 'rgb(175, 175, 175)' : 'rgba(100, 175, 250, 1)' };
  color: white;
  font-weight: bold;
  border-radius: 4px;
  text-decoration: none;
  transition: all 0.15s;
  opacity: 1;
  &:hover {
    background-color: ${ ({ isDisabled }: IStyledButton) => isDisabled ? 'rgb(175, 175, 175)' : 'rgb(0, 150, 25)' };
  }
`
interface IStyledButton {
  isDisabled?: boolean
}

export default BillingSubmitButton
