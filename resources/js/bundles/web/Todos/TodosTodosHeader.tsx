//-----------------------------------------------------------------------------
// Imports
//-----------------------------------------------------------------------------
import React from 'react'
import styled from 'styled-components'

//-----------------------------------------------------------------------------
// Component
//-----------------------------------------------------------------------------
export const TodosTodosHeader = ({
  text
}: ITodosTodosHeader) => {
  
  return (
      <Container>
        {text}
      </Container>
  )
}

//-----------------------------------------------------------------------------
// Props
//-----------------------------------------------------------------------------
interface ITodosTodosHeader {
  text: string
}

//-----------------------------------------------------------------------------
// Styled Components
//-----------------------------------------------------------------------------
const Container = styled.div`
  cursor: default;
  font-size: 1.1rem;
  margin-top: 0.5rem;
  margin-bottom: 0.25rem;
  font-weight: bold;
`

export default TodosTodosHeader
