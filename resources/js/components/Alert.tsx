//-----------------------------------------------------------------------------
// Imports
//-----------------------------------------------------------------------------
import React, { useEffect, useRef } from 'react'
import styled from 'styled-components'

//-----------------------------------------------------------------------------
// Component
//-----------------------------------------------------------------------------
export const Alert = ({ 
  children,
  closeAlert
}: IAlert) => {
  
  // Refs
  const content = useRef(null)

  // Add event listeners when the dropdown is visible
  useEffect(() => {
    addEventListener('click', closeAlertOnClickOutsideContent)
    return () => removeEventListener('click', closeAlertOnClickOutsideContent)
  }, [ closeAlert, content && content.current ])

  // Close Dropdown On Click Outside
  const closeAlertOnClickOutsideContent = (e: MouseEvent) => {
    if(content && content.current && !content.current.contains(e.target as Node)) {
      closeAlert && closeAlert()
    }
  }

  return (
    <Container>
      <Content
        ref={content}>
        {children}
      </Content>
    </Container>
  )
}

//-----------------------------------------------------------------------------
// Props
//-----------------------------------------------------------------------------
export interface IAlert {
  children?: any
  closeAlert(): void
}

//-----------------------------------------------------------------------------
// Styled Components
//-----------------------------------------------------------------------------
const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.5);
`

const Content = styled.div`
  background-color: white;
  border-radius: 10px;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-width: 40vw;
  text-align: center;
`

export default Alert
