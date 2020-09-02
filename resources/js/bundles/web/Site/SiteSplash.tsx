//-----------------------------------------------------------------------------
// Imports
//-----------------------------------------------------------------------------
import React from 'react'
import styled from 'styled-components'

import Authentication from '@web/Authentication/Authentication'

//-----------------------------------------------------------------------------
// Component
//-----------------------------------------------------------------------------
export const SiteSplash = () => {
  return (
    <Container>
      <LeftColumn>
        The simple yet powerful todo list
      </LeftColumn>
      <RightColumn>
        <Authentication />
      </RightColumn>
    </Container>
  )
}

//-----------------------------------------------------------------------------
// Styled Components
//-----------------------------------------------------------------------------
const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`

const Column = styled.div`
  width: 50%;
  display: flex;
  align-items: center;
`

const LeftColumn = styled(Column)`
  justify-content: center;
`

const RightColumn = styled(Column)`
  justify-content: flex-start;
`

export default SiteSplash