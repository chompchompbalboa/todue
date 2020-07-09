//-----------------------------------------------------------------------------
// Imports
//-----------------------------------------------------------------------------
import React from 'react'
import styled from 'styled-components'

import Lists from '@web/Lists/Lists'
import Todo from '@web/Todo/Todo'
import Todos from '@web/Todos/Todos'

//-----------------------------------------------------------------------------
// Component
//-----------------------------------------------------------------------------
export const App = () => {
  return (
      <Container>
        <Lists />
        <Todos />
        <Todo />
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

export default App
