//-----------------------------------------------------------------------------
// Imports
//-----------------------------------------------------------------------------
import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import styled from 'styled-components'

import { TODO, SETTINGS_GEAR } from '@/assets/icons'

import { useHistory } from '@/hooks'

import { IAppState } from '@/state' 

import Billing from '@web/Billing/Billing'
import Icon from '@/components/Icon'
import Lists from '@web/Lists/Lists'
import Logo from '@/components/Logo'
import Settings from '@web/Settings/Settings'
import Todo from '@web/Todo/Todo'
import Todos from '@web/Todos/Todos'
import User from '@web/User/User'

//-----------------------------------------------------------------------------
// Component
//-----------------------------------------------------------------------------
export const App = () => {
  
  // Redux
  const activeTodoId = useSelector((state: IAppState) => state.active.todoId)
  const userSubscriptionType = useSelector((state: IAppState) => state.userSubscription?.type || 'TRIAL')

  // State
  const [ activeRightColumn, setActiveRightColumn ] = useState('TODO' as 'TODO' | 'SETTINGS')

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
                fontSize="1.3rem"/>
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
          backgroundColor={activeTodoId ? "rgb(255, 255, 255)" : "transparent"}
          width="30rem">
          {activeTodoId &&
            <>
              <Tabs>
                <Tab
                  isActive={activeRightColumn === 'TODO'}
                  onClick={() => setActiveRightColumn('TODO')}>
                  <TabIcon>
                    <Icon
                      icon={TODO}/>
                  </TabIcon>
                  <TabText>
                    Todo
                  </TabText>
                </Tab>
                <Tab
                  isLast
                  isActive={activeRightColumn === 'SETTINGS'}
                  onClick={() => setActiveRightColumn('SETTINGS')}>
                  <TabIcon>
                    <Icon
                      icon={SETTINGS_GEAR}/>
                  </TabIcon>
                  <TabText>
                    Settings
                  </TabText>
                </Tab>
              </Tabs>
              <TabContent>
                {activeRightColumn === 'TODO' && <Todo />}
                {activeRightColumn === 'SETTINGS' && <Settings />}
              </TabContent>
            </>
          }
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

const Tabs = styled.div`
  width: 100%;
  height: 2.5rem;
  display: flex;
`

const Tab = styled.div`
  cursor: pointer;
  width: 50%;
  padding: 0 1rem;
  display: flex;
  align-items: center;
  background-color: ${ ({ isActive }: ITab) => isActive ? 'transparent' : 'rgb(245, 245, 249)' };
  border-right: ${ ({ isLast = false }: ITab) => isLast ? 'none' : '1px solid rgb(235, 235, 240)' };
  border-bottom: 1px solid ${ ({ isActive }: ITab) => isActive ? 'transparent' : 'rgb(235, 235, 240)' };
`
interface ITab {
  isActive: boolean
  isLast?: boolean
}

const TabText = styled.div`
  margin-top: 0.125rem;
  font-size: 1rem;
  font-weight: bold;
`

const TabIcon = styled.div`
  margin-right: 0.5rem;
  margin-top: 0.175rem;
  display: flex;
  justify-content: center;
  align-items: center;
`

const ColumnContainer = styled.div`
  width: 100%;
  height: 100%;
`

const TabContent = styled.div`
  width: 100%;
  height: calc(100% - 2.25rem);
`

const LogoContainer = styled.div`
  width: 100%;
  height: 5rem;
  display: flex;
  justify-content: center;
  align-items: center;
`

export default App
