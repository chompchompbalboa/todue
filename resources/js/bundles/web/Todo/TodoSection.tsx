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
  flexDirection = 'row',
  header
}: ITodoSection) => {

  return (
      <Container>
        <Header>
          {header}
        </Header>
        <Content
          flexDirection={flexDirection}>
          {children}
        </Content>
      </Container>
  )
}

//-----------------------------------------------------------------------------
// Props
//-----------------------------------------------------------------------------
interface ITodoSection {
  children?: any
  flexDirection?: string
  header: string
}

//-----------------------------------------------------------------------------
// Styled Components
//-----------------------------------------------------------------------------
const Container = styled.div`
  padding: 0 1rem;
  margin-bottom: 0.5rem;
`

const Header = styled.div`
  font-weight: bold;
  text-decoration: underline;
  margin-bottom: 0.5rem;
`

const Content = styled.div`
  display: flex;
  flex-direction: ${ ({ flexDirection }: IContent) => flexDirection };
  align-items: center;
`
interface IContent {
  flexDirection: string
}

export default TodoSection
