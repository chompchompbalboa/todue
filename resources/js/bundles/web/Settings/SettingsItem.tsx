//-----------------------------------------------------------------------------
// Imports
//-----------------------------------------------------------------------------
import React from 'react'
import styled from 'styled-components'

//-----------------------------------------------------------------------------
// Component
//-----------------------------------------------------------------------------
export const SettingsItem = ({
  children,
  label,
  onClick
}: ISettingsItem) => {
  return (
      <Container
        onClick={onClick}>
          <LabelContainer>
            <Label>
              {label}
            </Label>
          </LabelContainer>
        <Separator />
        <ContentContainer>
          {children}
        </ContentContainer>
      </Container>
  )
}

//-----------------------------------------------------------------------------
// Props
//-----------------------------------------------------------------------------
interface ISettingsItem {
  children: any
  label: string
  onClick?(): void
}

//-----------------------------------------------------------------------------
// Styled Components
//-----------------------------------------------------------------------------
const Container = styled.div`
  width: 100%;
  padding: 0.5rem 1rem;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`

const LabelContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
`

const Label = styled.div`
  font-size: 1rem;
  font-weight: bold;
  padding-right: 0.75rem;
`

const Separator = styled.div`
  flex-grow: 1;
  min-width: 0.25rem;
  border-bottom: 1px solid rgb(220, 220, 230);
`

const ContentContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  padding-left: 0.75rem;
  text-align: right;
`
export default SettingsItem
