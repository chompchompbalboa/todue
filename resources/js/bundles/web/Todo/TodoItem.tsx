//-----------------------------------------------------------------------------
// Imports
//-----------------------------------------------------------------------------
import React from 'react'
import styled from 'styled-components'

import Icon from '@/components/Icon'

//-----------------------------------------------------------------------------
// Component
//-----------------------------------------------------------------------------
export const TodoItem = ({
  children,
  icon,
  label,
  onClick,
  text
}: ITodoItem) => {
  return (
      <Container
        onClick={onClick}>
        <LabelContainer>
          <LabelIcon>
            <Icon
              icon={icon}
              size="1rem"/>
          </LabelIcon>
          <Label>
            {label}
          </Label>
        </LabelContainer>
        <ContentContainer>
          {children || <Text>{text || "-"}</Text>}
        </ContentContainer>
      </Container>
  )
}

//-----------------------------------------------------------------------------
// Props
//-----------------------------------------------------------------------------
interface ITodoItem {
  children?: any
  icon: string
  label: string
  onClick?(): void
  text?: string
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
`

const LabelIcon = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 0.5rem;
`

const ContentContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
`

const Text = styled.div`
  font-size: 1rem;
`

export default TodoItem
