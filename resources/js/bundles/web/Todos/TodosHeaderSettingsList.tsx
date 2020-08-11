//-----------------------------------------------------------------------------
// Imports
//-----------------------------------------------------------------------------
import React from 'react'
import styled from 'styled-components'

import { IList } from '@/state/list/types'

import TodosHeaderSettingsListDeleteList from '@web/Todos/TodosHeaderSettingsListDeleteList'

//-----------------------------------------------------------------------------
// Component
//-----------------------------------------------------------------------------
export const TodosHeaderSettingsList = ({
  listId
}: ITodosHeaderSettingsList) => {

  return (
    <Container>
      <TodosHeaderSettingsListDeleteList
        listId={listId}/>
    </Container>
  )
}

//-----------------------------------------------------------------------------
// Props
//-----------------------------------------------------------------------------
interface ITodosHeaderSettingsList {
  listId: IList['id']
}

//-----------------------------------------------------------------------------
// Styled Components
//-----------------------------------------------------------------------------
const Container = styled.div``

export default TodosHeaderSettingsList
