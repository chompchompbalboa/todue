//-----------------------------------------------------------------------------
// Imports
//-----------------------------------------------------------------------------
import React from 'react'
import styled from 'styled-components'

import Icon from '@/components/Icon'

//-----------------------------------------------------------------------------
// Component
//-----------------------------------------------------------------------------
export const TodoAction = ({
  icon,
  iconText,
  onClick,
  text,
}: ITodoAction) => {

  return (
      <Container
        onClick={onClick}>
        <IconContainer>
          {iconText
            ? iconText
            : <Icon
                icon={icon}
                size="1.1rem"/>
          }
        </IconContainer>
        <Text>
          {text}
        </Text>
      </Container>
  )
}

//-----------------------------------------------------------------------------
// Props
//-----------------------------------------------------------------------------
interface ITodoAction {
  icon?: string
  iconText?: string
  onClick(): void
  text: string
}

//-----------------------------------------------------------------------------
// Styled Components
//-----------------------------------------------------------------------------
const Container = styled.div`
  cursor: pointer;
  width: 20%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0.5rem;
  background-color: rgb(245, 245, 249);
  border-right: 1px solid rgb(220, 220, 220);
  &:hover {
    background-color: rgb(235, 235, 239);
  }
`

const IconContainer = styled.div``

const Text = styled.div`
  font-size: 0.75rem;
  white-space: nowrap;
`

export default TodoAction
