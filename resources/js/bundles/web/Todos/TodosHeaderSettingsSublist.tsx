//-----------------------------------------------------------------------------
// Imports
//-----------------------------------------------------------------------------
import React from 'react'
import styled from 'styled-components'

import { ISublist } from '@/state/sublist/types'

import TodosHeaderSettingsSublistDeleteSublist from '@web/Todos/TodosHeaderSettingsSublistDeleteSublist'

//-----------------------------------------------------------------------------
// Component
//-----------------------------------------------------------------------------
export const TodosHeaderSettingsSublist = ({
  sublistId,
}: ITodosHeaderSettingsSublist) => {

  return (
    <Container>
      <TodosHeaderSettingsSublistDeleteSublist
        sublistId={sublistId}/>
    </Container>
  )
}

//-----------------------------------------------------------------------------
// Props
//-----------------------------------------------------------------------------
interface ITodosHeaderSettingsSublist {
  sublistId: ISublist['id']
}

//-----------------------------------------------------------------------------
// Styled Components
//-----------------------------------------------------------------------------
const Container = styled.div`
  width: 100%;
  position: relative;
`

export default TodosHeaderSettingsSublist
