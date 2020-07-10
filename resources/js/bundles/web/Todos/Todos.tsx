//-----------------------------------------------------------------------------
// Imports
//-----------------------------------------------------------------------------
import React from 'react'
import { useSelector } from 'react-redux'
import styled from 'styled-components'

import { IAppState } from '@/state'

import TodosHeader from '@web/Todos/TodosHeader'

//-----------------------------------------------------------------------------
// Component
//-----------------------------------------------------------------------------
export const Todos = () => {
  
  // Redux
  const activeListId = useSelector((state: IAppState) => state.active.listId)
                                     
  return (
      <Container>
        {activeListId && 
          <TodosHeader />
        }
      </Container>
  )
}

//-----------------------------------------------------------------------------
// Styled Components
//-----------------------------------------------------------------------------
const Container = styled.div`
  width: 100%;
  height: 100%;
`

export default Todos
