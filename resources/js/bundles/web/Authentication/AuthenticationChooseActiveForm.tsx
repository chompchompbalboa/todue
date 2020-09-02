//-----------------------------------------------------------------------------
// Imports
//-----------------------------------------------------------------------------
import React from 'react'
import styled from 'styled-components'

//-----------------------------------------------------------------------------
// Component
//-----------------------------------------------------------------------------
const AuthenticationChooseActiveForm = ({
  activeForm,
  setActiveForm
}: IAuthenticationChooseActiveForm) => {
  return (
    <Container>
      <FormLink
        isActiveForm={activeForm === 'REGISTER'}
        onClick={() => setActiveForm('REGISTER')}>
        Register
      </FormLink>
      <FormLinkDivider />
      <FormLink
        isActiveForm={activeForm === 'LOGIN'}
        onClick={() => setActiveForm('LOGIN')}>
        Login
      </FormLink>
    </Container>
  )
}

//-----------------------------------------------------------------------------
// Props
//-----------------------------------------------------------------------------
interface IAuthenticationChooseActiveForm {
  activeForm: 'REGISTER' | 'LOGIN',
  setActiveForm(nextActiveForm: 'REGISTER' | 'LOGIN'): void
}

//-----------------------------------------------------------------------------
// Styled Components
//-----------------------------------------------------------------------------
const Container = styled.div`
  padding: 1rem;
  display: flex;
  justify-content: space-around;
  align-items: center;
  background-color: rgb(250, 250, 250);
  border-top-left-radius: 6px;
  border-top-right-radius: 6px;
`

const FormLink = styled.div`
  cursor: pointer;
  width: 25%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 0.9rem;
  font-weight: bold;
  text-decoration: ${ ({ isActiveForm }: IFormLink ) => isActiveForm ? 'underline' : 'none' };
  &:hover {
    text-decoration: underline;
  }
`
interface IFormLink {
  isActiveForm: boolean
}

const FormLinkDivider = styled.div`
  height: 1rem;
  width: 1px;
  background-color: black;
`

export default AuthenticationChooseActiveForm
