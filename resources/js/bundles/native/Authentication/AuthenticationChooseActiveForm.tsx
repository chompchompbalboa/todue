//-----------------------------------------------------------------------------
// Imports
//-----------------------------------------------------------------------------
import React from 'react'
import styled from 'styled-components/native'

//-----------------------------------------------------------------------------
// Component
//-----------------------------------------------------------------------------
const AuthenticationChooseActiveForm = ({
  activeForm,
  setActiveForm
}: IAuthenticationChooseActiveForm) => {
  return (
    <Container>
      <FormLinkTouchable
        onPress={() => setActiveForm('REGISTER')}>
        <FormLink
          isActiveForm={activeForm === 'REGISTER'}>
          Register
        </FormLink>
      </FormLinkTouchable>
      <FormLinkDivider />
      <FormLinkTouchable
        onPress={() => setActiveForm('LOGIN')}>
        <FormLink
          isActiveForm={activeForm === 'LOGIN'}>
          Login
        </FormLink>
      </FormLinkTouchable>
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
const Container = styled.View`
  padding: 16px;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  background-color: rgb(250, 250, 250);
  border-top-left-radius: 6px;
  border-top-right-radius: 6px;
`

const FormLinkTouchable = styled.TouchableWithoutFeedback`
`
const FormLink = styled.Text`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 14px;
  font-weight: bold;
  text-decoration: ${ ({ isActiveForm }: IFormLink ) => isActiveForm ? 'underline' : 'none' };
`
interface IFormLink {
  isActiveForm: boolean
}

const FormLinkDivider = styled.View`
  margin: 0 16px;
  height: 16px;
  width: 1px;
  background-color: black;
`

export default AuthenticationChooseActiveForm
