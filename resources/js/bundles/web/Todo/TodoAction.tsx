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
  isFirst = false,
  isLast = false,
  onClick,
  text,
}: ITodoAction) => {

  return (
      <Container
        isFirst={isFirst}
        isLast={isLast}
        onClick={onClick}>
        <IconContainer>
          {iconText
            ? iconText
            : <Icon
                icon={icon}
                size="1rem"/>
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
  isFirst?: boolean
  isLast?: boolean
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
  border-right: ${ ({ isLast }: IContainer) => isLast ? 'none' : '1px solid rgb(220, 220, 220)' };
  border-top-left-radius: ${ ({ isFirst }: IContainer) => isFirst ? '5px' : '0' };
  border-top-right-radius: ${ ({ isLast }: IContainer) => isLast ? '5px' : '0' };
  border-bottom-left-radius: ${ ({ isFirst }: IContainer) => isFirst ? '5px' : '0' };
  border-bottom-right-radius: ${ ({ isLast }: IContainer) => isLast ? '5px' : '0' };
  &:hover {
    background-color: rgb(235, 235, 239);
  }
`
interface IContainer {
  isFirst: boolean
  isLast: boolean
}

const IconContainer = styled.div``

const Text = styled.div`
  font-size: 0.75rem;
  white-space: nowrap;
`

export default TodoAction
