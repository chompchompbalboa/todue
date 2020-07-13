//-----------------------------------------------------------------------------
// Imports
//-----------------------------------------------------------------------------
import React from 'react'
import styled from 'styled-components'

//-----------------------------------------------------------------------------
// Component
//-----------------------------------------------------------------------------
export const TodoSection = ({
  children,
  header
}: ITodoSection) => {

  return (
      <Container>
        <Header>{header}</Header>
        <Content>{children}</Content>
      </Container>
  )
}

//-----------------------------------------------------------------------------
// Props
//-----------------------------------------------------------------------------
interface ITodoSection {
  children?: any
  header: string
}

//-----------------------------------------------------------------------------
// Styled Components
//-----------------------------------------------------------------------------
const Container = styled.div`
  padding: 0 1rem;
  margin-bottom: 1rem;
`

const Header = styled.div`
  font-weight: bold;
  text-decoration: underline;
`

const Content = styled.div`
  display: flex;
  align-items: center;
`

export default TodoSection
