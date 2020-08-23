//-----------------------------------------------------------------------------
// Imports
//-----------------------------------------------------------------------------
import React from 'react'
import styled from 'styled-components/native'

//-----------------------------------------------------------------------------
// Component
//-----------------------------------------------------------------------------
const SiteFormCheckbox = ({
  checked,
  label = null,
  onChange
}: ISiteFormCheckbox) => {

  return (
    <Container>
      <StyledSwitch
        onValueChange={e => onChange(!checked)}
        value={checked}/>
        <Label>
          {label}
        </Label>
    </Container>
  )
}

//-----------------------------------------------------------------------------
// Props
//-----------------------------------------------------------------------------
interface ISiteFormCheckbox {
  checked: boolean
  label: string
  onChange(nextValue: boolean): void
}

//-----------------------------------------------------------------------------
// Styled Components
//-----------------------------------------------------------------------------
const Container = styled.View`
  padding: 4px 0;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
`

const Label = styled.Text`
  margin-left: 8px;
  width: 100%;
`

const StyledSwitch = styled.Switch`
  margin: 6px;
  margin-left: 0;
  padding: 8px 4px;
  border-radius: 4px;
  font-size: 14px;
`

export default SiteFormCheckbox
