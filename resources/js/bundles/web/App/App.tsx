//-----------------------------------------------------------------------------
// Imports
//-----------------------------------------------------------------------------
import React from 'react'
import styled from 'styled-components'

import { useHistory } from '@/hooks'

import Lists from '@web/Lists/Lists'
import Todo from '@web/Todo/Todo'
import Todos from '@web/Todos/Todos'
import User from '@web/User/User'

//-----------------------------------------------------------------------------
// Component
//-----------------------------------------------------------------------------
export const App = () => {

  // Listen for undo/redo
  useHistory()

  return (
      <Container
        data-testid="App">
        <Column 
          backgroundColor="rgb(255, 255, 255)"
          width="20rem">
          <ColumnContainer>
            <Lists />
            <User />
          </ColumnContainer>
        </Column>
        <Column 
          width="50%">
          <Todos />
        </Column>
        <Column 
          width="50%">
          <Todo />
        </Column>
      </Container>
  )
}

//-----------------------------------------------------------------------------
// Styled Components
//-----------------------------------------------------------------------------
const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  background-color: rgb(235, 235, 235);
  overflow: hidden;
`

const Column = styled.div`
  width: ${ ({ width }: IColumn ) => width };
  height: 100%;
  background-color: ${ ({ backgroundColor = 'transparent' }: IColumn ) => backgroundColor };
`
interface IColumn {
  backgroundColor?: string
  width: string
}

const ColumnContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`

export default App
