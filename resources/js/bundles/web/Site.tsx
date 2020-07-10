//-----------------------------------------------------------------------------
// Imports
//-----------------------------------------------------------------------------
import React from 'react'
import ReactDOM from 'react-dom'
import styled from 'styled-components'

import SiteAuthentication from '@web/Site/SiteAuthentication'

//-----------------------------------------------------------------------------
// Component
//-----------------------------------------------------------------------------
export const Site = () => {
  return (
      <Container>
        <SiteAuthentication />
      </Container>
  )
}

//-----------------------------------------------------------------------------
// Styled Components
//-----------------------------------------------------------------------------
const Container = styled.div``

//-----------------------------------------------------------------------------
// Mount to DOM
//-----------------------------------------------------------------------------
if (document.getElementById('react-container')) {
	ReactDOM.render(<Site />, document.getElementById('react-container'))
}
