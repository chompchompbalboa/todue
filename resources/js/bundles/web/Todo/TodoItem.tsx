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
            {false && // I'm removing the icon for now, but want to leave the functionality in place in case I change my mind
            <LabelIcon>
              <Icon
                icon={icon}
                size="1.1rem"/>
            </LabelIcon>
            }
            <Label>
              {label}
            </Label>
          </LabelContainer>
        <Separator />
        <ContentContainer>
          {children || <Text>{text || "None"}</Text>}
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
  font-size: 1.1rem;
  font-weight: bold;
  padding-right: 0.75rem;
`

const LabelIcon = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 0.375rem;
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

const Text = styled.div`
  font-size: 0.95rem;
`

export default TodoItem
