//-----------------------------------------------------------------------------
// Imports
//-----------------------------------------------------------------------------
import React from 'react'
import { useSelector } from 'react-redux'
import styled from 'styled-components'

import { IAppState } from '@/state'

import TodosHeader from '@web/Todos/TodosHeader'
import TodosTodos from '@web/Todos/TodosTodos'

//-----------------------------------------------------------------------------
// Component
//-----------------------------------------------------------------------------
export const Todos = () => {
  
  // Redux
  const activeListId = useSelector((state: IAppState) => state.active.listId)
  const activeSublistId = useSelector((state: IAppState) => state.active.sublistId)
  
  return (
      <Container>
        {activeListId && 
          <>
            <TodosHeader
              listId={activeListId}
              sublistId={activeSublistId}/>
            <TodosTodos
              listId={activeListId}
              sublistId={activeSublistId}/>
          </>
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
	overflow-y: scroll;
	scrollbar-width: none;
	-ms-overflow-style: none;
	&::-webkit-scrollbar {
		width: 0;
		height: 0;
	}
`

export default Todos
