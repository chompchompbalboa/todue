//-----------------------------------------------------------------------------
// Imports
//-----------------------------------------------------------------------------
import React from 'react'
import styled from 'styled-components'

//-----------------------------------------------------------------------------
// Component
//-----------------------------------------------------------------------------
export const TodoSection = ({
  alignItems = 'center',
  children,
  flexDirection = 'row',
  header,
  headerMarginBottom = '0.25rem',
  justifyContent = 'flex-start',
  marginBottom = '0.5rem'
}: ITodoSection) => {

  return (
      <Container
        marginBottom={marginBottom}>
        <Header
          marginBottom={headerMarginBottom}>
          {header}
        </Header>
        <Content
          alignItems={alignItems}
          flexDirection={flexDirection}
          justifyContent={justifyContent}>
          {children}
        </Content>
      </Container>
  )
}

//-----------------------------------------------------------------------------
// Props
//-----------------------------------------------------------------------------
interface ITodoSection {
  alignItems?: string
  children?: any
  flexDirection?: string
  header: string
  headerMarginBottom?: string
  justifyContent?: string
  marginBottom?: string
}

//-----------------------------------------------------------------------------
// Styled Components
//-----------------------------------------------------------------------------
const Container = styled.div`
  padding: 0 1rem;
  margin-bottom: ${ ({ marginBottom }: IContainer) => marginBottom };
`
interface IContainer {
  marginBottom: string
}

const Header = styled.div`
  font-weight: bold;
  text-decoration: underline;
  margin-bottom: ${ ({ marginBottom }: IHeader) => marginBottom };
`
interface IHeader {
  marginBottom: string
}

const Content = styled.div`
  display: flex;
  flex-direction: ${ ({ flexDirection }: IContent) => flexDirection };
  justify-content: ${ ({ justifyContent }: IContent) => justifyContent };
  align-items: ${ ({ alignItems }: IContent) => alignItems };
`
interface IContent {
  alignItems: string
  flexDirection: string
  justifyContent: string
}

export default TodoSection
