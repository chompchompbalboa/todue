//-----------------------------------------------------------------------------
// Imports
//-----------------------------------------------------------------------------
import React from 'react'
import styled from 'styled-components'

//-----------------------------------------------------------------------------
// Component
//-----------------------------------------------------------------------------
export const Toggle = ({
  isActive,
  onClick
}: IToggle) => {

  return (
      <Container
        onClick={onClick}>
        <ToggleBackground
          isActive={isActive}/>
        <ToggleForeground
          isActive={isActive}/>
      </Container>
  )
}

//-----------------------------------------------------------------------------
// Props
//-----------------------------------------------------------------------------
interface IToggle {
  isActive: boolean
  onClick(): void
}

//-----------------------------------------------------------------------------
// Styled Components
//-----------------------------------------------------------------------------
const Container = styled.div`
  position: relative;
  cursor: pointer;
  margin-left: 0.25rem;
  height: 1rem;
  width: 1.75rem;
  display: flex;
  border-radius: 0.5rem;
  overflow: hidden;
`

const ToggleBackground = styled.div`
  height: 100%;
  width: 100%;
  background-color: ${ ({ isActive }: IToggleBackground ) => isActive ? 'rgb(0, 150, 0)' : 'rgb(200, 200, 200)' };
  transition: background-color 0.15s;
`

const ToggleForeground = styled.div`
  position: absolute;
  top: 0;
  left: ${ ({ isActive }: IToggleBackground ) => isActive ? '0.75rem' : '0' };
  height: 1rem;
  width: 1rem;
  border-radius: 0.5rem;
  background-color: rgb(225, 225, 225);
  transition: left 0.15s;
`
interface IToggleBackground {
  isActive: boolean
}


export default Toggle
