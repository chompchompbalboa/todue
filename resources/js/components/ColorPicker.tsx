//-----------------------------------------------------------------------------
// Imports
//-----------------------------------------------------------------------------
import React from 'react'
import styled from 'styled-components'

import { ChromePicker } from 'react-color'

//-----------------------------------------------------------------------------
// Component
//-----------------------------------------------------------------------------
const ColorPicker = ({
  activeColor,
  onColorChange
}: ColorPickerProps) => {

  //const colorPickerWidth = window.innerWidth * 0.15

  return (
      <Container>
        <ChromePicker
          color={activeColor}
          onChangeComplete={nextColor => onColorChange(nextColor.hex)}/>
      </Container>
  )
}

//-----------------------------------------------------------------------------
// Props
//-----------------------------------------------------------------------------
interface ColorPickerProps {
  activeColor: string
  onColorChange(nextColor: string): void
}

//-----------------------------------------------------------------------------
// Styled Components
//-----------------------------------------------------------------------------
const Container = styled.div`
  width: 100%;
  height: 100%;
  padding: 0.625rem;
  border-radius: 5px;
  background-color: rgb(250, 250, 250);
  box-shadow: 2px 2px 15px 0px rgba(0,0,0,0.3);
`

//-----------------------------------------------------------------------------
// Export
//-----------------------------------------------------------------------------
export default ColorPicker
