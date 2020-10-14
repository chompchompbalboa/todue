//-----------------------------------------------------------------------------
// Imports
//-----------------------------------------------------------------------------
import React from 'react'
import { useSelector } from 'react-redux'
import styled from 'styled-components'

import { useHistory } from '@/hooks'

import { IAppState } from '@/state' 

import Billing from '@web/Billing/Billing'
import Lists from '@web/Lists/Lists'
import Logo from '@/components/Logo'
import Todo from '@web/Todo/Todo'
import Todos from '@web/Todos/Todos'
import User from '@web/User/User'

//-----------------------------------------------------------------------------
// Component
//-----------------------------------------------------------------------------
export const App = () => {
  
  // Redux
  const userSubscriptionType = useSelector((state: IAppState) => state.userSubscription?.type || 'TRIAL')

  // Listen for undo/redo
  useHistory()

  if(userSubscriptionType.includes('EXPIRED')) {
    return <Billing isLogoutVisible={true}/>
  }
  else {
    return (
      <Container
        data-testid="App">
        <Column 
          backgroundColor="rgb(255, 255, 255)"
          width="20rem"
          zIndex="100">
          <ColumnContainer>
            <LogoContainer>
              <Logo
                fontSize="1.1rem"/>
            </LogoContainer>
            <Lists />
            <User />
          </ColumnContainer>
        </Column>
        <Column 
          width="calc(100% - 30rem)">
          <Todos />
        </Column>
        <Column 
          width="30rem">
          <Todo />
        </Column>
      </Container>
    )
  }
}

//-----------------------------------------------------------------------------
// Styled Components
//-----------------------------------------------------------------------------
const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  background-color: rgb(245, 245, 249);
  overflow: hidden;
`

const Column = styled.div`
  z-index: ${ ({ zIndex = '1' }: IColumn ) => zIndex };
  width: ${ ({ width }: IColumn ) => width };
  height: 100%;
  background-color: ${ ({ backgroundColor = 'transparent' }: IColumn ) => backgroundColor };
`
interface IColumn {
  backgroundColor?: string
  width: string
  zIndex?: string
}

const ColumnContainer = styled.div`
  width: 100%;
  height: 100%;
`

const LogoContainer = styled.div`
  width: 100%;
  height: 5rem;
  display: flex;
  justify-content: center;
  align-items: center;
`

export default App
