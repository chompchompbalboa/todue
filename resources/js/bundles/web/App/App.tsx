//-----------------------------------------------------------------------------
// Imports
//-----------------------------------------------------------------------------
import React from 'react'
import styled from 'styled-components'

import Lists from '@web/Lists/Lists'
import Todo from '@web/Todo/Todo'
import Todos from '@web/Todos/Todos'
import User from '@web/User/User'

//-----------------------------------------------------------------------------
// Component
//-----------------------------------------------------------------------------
export const App = () => {
  return (
      <Container>
        <Column 
          backgroundColor="rgb(250, 250, 250)"
          width="20rem">
          <Lists />
          <User />
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
  background-color: rgb(240, 240, 240);
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

export default App
