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
      {activeForm === 'LOGIN' &&
        <FormLinkTouchable
          onPress={() => setActiveForm('REGISTER')}>
          <FormLink>
            <FormLinkText>
              &larr; Back To Sign Up
            </FormLinkText>
          </FormLink>
        </FormLinkTouchable>
      }
      {activeForm === 'REGISTER' &&
        <FormLinkTouchable
          onPress={() => setActiveForm('LOGIN')}>
          <FormLink>
            <FormLinkText>
              Have An Account? Log In Instead &rarr;
            </FormLinkText>
          </FormLink>
        </FormLinkTouchable>
      }
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
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
`

const FormLinkTouchable = styled.TouchableWithoutFeedback`
`
const FormLink = styled.View`
  display: flex;
  justify-content: center;
  align-items: center;
  border-top-left-radius: 6px;
  border-top-right-radius: 6px;
`

const FormLinkText = styled.Text`
  font-size: 16px;
  font-weight: bold;
  font-family: OpenSans_400Regular;
`

export default AuthenticationChooseActiveForm
