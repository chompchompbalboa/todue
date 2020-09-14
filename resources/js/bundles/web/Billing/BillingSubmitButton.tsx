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
  padding: 0.5rem;
  white-space: nowrap;
  border: 1px solid rgb(150, 150, 150);
  outline: 0;
  background-color: ${ ({ isDisabled }: IStyledButton) => isDisabled ? 'rgb(175, 175, 175)' : 'rgb(0, 0, 150)' };
  color: white;
  border-radius: 4px;
  text-decoration: none;
  transition: all 0.15s;
  opacity: 1;
  &:hover {
    background-color: ${ ({ isDisabled }: IStyledButton) => isDisabled ? 'rgb(175, 175, 175)' : 'rgb(0, 150, 25)' };
    border: ${ ({ isDisabled }: IStyledButton) => isDisabled ? '1px solid rgb(150, 150, 150)' : '1px solid rgb(0, 150, 25)' };
  }
`
interface IStyledButton {
  isDisabled?: boolean
}

export default BillingSubmitButton
