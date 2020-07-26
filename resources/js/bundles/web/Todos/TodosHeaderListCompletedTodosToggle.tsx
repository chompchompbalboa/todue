//-----------------------------------------------------------------------------
// Imports
//-----------------------------------------------------------------------------
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import styled from 'styled-components'

import { IAppState } from '@/state'
import { IList } from '@/state/list/types'

import { 
  updateActiveIsCompletedTodosVisible
} from '@/state/active/actions'
import { 
  refreshVisibleTodos
} from '@/state/todo/actions'

//-----------------------------------------------------------------------------
// Component
//-----------------------------------------------------------------------------
export const TodosHeaderListCompletedTodosToggle = ({
  listId
}: ITodosHeaderListCompletedTodosToggle) => {
  
  // Redux
  const dispatch = useDispatch()
  const activeIsCompletedTodosVisible = useSelector((state: IAppState) => state.active.isCompletedTodosVisible)

  return (
    <Container>
      <Label>
        Show Completed Todos
      </Label>
      <Toggle
        onClick={() => {
          dispatch(updateActiveIsCompletedTodosVisible(!activeIsCompletedTodosVisible))
          dispatch(refreshVisibleTodos())
        }}>
        <ToggleBackground
          isCompletedTodosVisible={activeIsCompletedTodosVisible}/>
        <ToggleForeground
          isCompletedTodosVisible={activeIsCompletedTodosVisible}/>
      </Toggle>
    </Container>
  )
}

//-----------------------------------------------------------------------------
// Props
//-----------------------------------------------------------------------------
interface ITodosHeaderListCompletedTodosToggle {
  listId: IList['id']
}

//-----------------------------------------------------------------------------
// Styled Components
//-----------------------------------------------------------------------------
const Container = styled.div`
  display: flex;
  align-items: center;
`

const Label = styled.div`
  font-size: 0.9rem;
`

const Toggle = styled.div`
  position: relative;
  cursor: pointer;
  margin-left: 0.25rem;
  height: 1rem;
  width: 1.75rem;
  display: flex;
  border-radius: 0.5rem;
  overflow: hidden;
`

const ToggleBackground = styled.div`
  height: 100%;
  width: 100%;
  background-color: ${ ({ isCompletedTodosVisible }: IToggle ) => isCompletedTodosVisible ? 'rgb(0, 150, 0)' : 'rgb(200, 200, 200)' };
  transition: background-color 0.15s;
`

const ToggleForeground = styled.div`
  position: absolute;
  top: 0;
  left: ${ ({ isCompletedTodosVisible }: IToggle ) => isCompletedTodosVisible ? '0.75rem' : '0' };
  height: 1rem;
  width: 1rem;
  border-radius: 0.5rem;
  background-color: rgb(225, 225, 225);
  transition: left 0.15s;
`

interface IToggle {
  isCompletedTodosVisible: boolean
}


export default TodosHeaderListCompletedTodosToggle
