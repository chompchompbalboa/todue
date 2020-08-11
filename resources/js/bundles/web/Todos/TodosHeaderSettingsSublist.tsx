//-----------------------------------------------------------------------------
// Imports
//-----------------------------------------------------------------------------
import React from 'react'
import styled from 'styled-components'

import { ISublist } from '@/state/sublist/types'

import TodosHeaderSettingsSublistTags from '@web/Todos/TodosHeaderSettingsSublistTags'

//-----------------------------------------------------------------------------
// Component
//-----------------------------------------------------------------------------
export const TodosHeaderSettingsSublist = ({
  sublistId,
}: ITodosHeaderSettingsSublist) => {

  return (
    <Container>
      <TodosHeaderSettingsSublistTags
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
  display: flex;
`

export default TodosHeaderSettingsSublist
