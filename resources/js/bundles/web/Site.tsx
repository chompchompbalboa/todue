//-----------------------------------------------------------------------------
// Imports
//-----------------------------------------------------------------------------
import React from 'react'
import ReactDOM from 'react-dom'
import styled from 'styled-components'

import SiteHeader from '@web/Site/SiteHeader'
import SiteSplash from '@web/Site/SiteSplash'
import SiteRow from '@web/Site/SiteRow'
import SiteRowContent from '@web/Site/SiteRowContent'

//-----------------------------------------------------------------------------
// Component
//-----------------------------------------------------------------------------
export const Site = () => {
  return (
      <Container>
        <SiteHeader />
        <SiteSplash />
        <SiteRow>
          <SiteRowContent>
          </SiteRowContent>
          <SiteRowContent>
            Built for speed and ease-of-use
          </SiteRowContent>
        </SiteRow>
        <SiteRow>
          <SiteRowContent>
            An opinionated feature set designed to minimize the amount of time you spend organizing your todos
          </SiteRowContent>
          <SiteRowContent>
          </SiteRowContent>
        </SiteRow>
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
