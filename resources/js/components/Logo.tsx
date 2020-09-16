//-----------------------------------------------------------------------------
// Imports
//-----------------------------------------------------------------------------
import React from 'react'
import styled from 'styled-components'

import { CHECK } from '@/assets/icons'

import Icon from '@/components/Icon'

//-----------------------------------------------------------------------------
// Component
//-----------------------------------------------------------------------------
export const Logo = ({
  fontSize = '1rem'
}: ILogo) => {
  return (
    <Container>
      <Icon
        icon={CHECK}
        size={fontSize}/>
      <Text
        fontSize={fontSize}>
        QuickDo
      </Text>
    </Container>
  )
}

//-----------------------------------------------------------------------------
// Props
//-----------------------------------------------------------------------------
interface ILogo {
  fontSize?: string
}

//-----------------------------------------------------------------------------
// Styled Components
//-----------------------------------------------------------------------------
const Container = styled.div`
  display: flex;
  align-items: center;
`

const Text = styled.div`
  margin-left: 0.35rem;
  font-size: ${ ({ fontSize }: IText) => fontSize };
  font-weight: bold;
`
interface IText {
  fontSize: string
}

export default Logo