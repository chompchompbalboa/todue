//-----------------------------------------------------------------------------
// Imports
//-----------------------------------------------------------------------------
import React from 'react'
import styled from 'styled-components'

//-----------------------------------------------------------------------------
// Component
//-----------------------------------------------------------------------------
export const Logo = ({
  fontSize = '1rem'
}: ILogo) => {
  return (
      <Container
        fontSize={fontSize}>
        QuickDo
      </Container>
  )
}

//-----------------------------------------------------------------------------
// Props
//-----------------------------------------------------------------------------
interface ILogo {
  fontSize?: string
}

//-----------------------------------------------------------------------------
// Styled Components
//-----------------------------------------------------------------------------
const Container = styled.div`
  font-size: ${ ({ fontSize }: IContainer) => fontSize };
  font-weight: bold;
`
interface IContainer {
  fontSize: string
}

export default Logo