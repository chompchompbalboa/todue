//-----------------------------------------------------------------------------
// Imports
//-----------------------------------------------------------------------------
import React from 'react'
import styled from 'styled-components'

import Logo from '@/components/Logo'

//-----------------------------------------------------------------------------
// Component
//-----------------------------------------------------------------------------
export const SiteHeader = () => {
  return (
      <Container>
        <Logo />
      </Container>
  )
}

//-----------------------------------------------------------------------------
// Styled Components
//-----------------------------------------------------------------------------
const Container = styled.div`
  padding: 1rem;
  position: sticky;
  top: 0;
  background-color: white;
  border-bottom: 1px solid rgb(200, 200, 200);
`

export default SiteHeader