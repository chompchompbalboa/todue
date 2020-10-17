//-----------------------------------------------------------------------------
// Imports
//-----------------------------------------------------------------------------
import React, { useRef, useState } from 'react'
import { useSelector } from 'react-redux'
import styled from 'styled-components'

import { TAG } from '@/assets/icons'

import { IAppState } from '@/state'
import { ITodo } from '@/state/todo/types'

import Dropdown from '@/components/Dropdown'
import TodoItem from '@web/Todo/TodoItem'
import TodoTagsActiveTag from '@web/Todo/TodoTagsActiveTag'
import TodoTagsTags from '@web/Todo/TodoTagsTags'

//-----------------------------------------------------------------------------
// Component
//-----------------------------------------------------------------------------
export const TodoTags = ({
  todoId
}: ITodoTags) => {

  // Refs
  const containerRef = useRef(null)
    
  // State
  const [ isDropdownVisible, setIsDropdownVisible ] = useState(false)

  // Redux
  const todoTags = useSelector((state: IAppState) => state.todoTag.todoTagsByTodoId[todoId])

  // Has Todo Tags
  const hasTodoTags = todoTags && todoTags.length > 0

  return (
      <TodoItem
        icon={TAG}
        label="Sublists">
        <Container
          ref={containerRef}>
          <Tags
            onClick={() => setIsDropdownVisible(true)}
            padding={hasTodoTags ? '0.5rem' : '0' }>
            {hasTodoTags
              ? todoTags.map(todoTagId => (
                  <TodoTagsActiveTag
                    key={todoTagId}
                    todoTagId={todoTagId}/>
                ))
              : 'None'
          }
          </Tags>
          <Dropdown
            containerRef={containerRef}
            closeDropdown={() => setIsDropdownVisible(false)}
            isDropdownVisible={isDropdownVisible}
            right="0">
            <DropdownContent>
              <TodoTagsTags 
                todoId={todoId}/>
            </DropdownContent>
          </Dropdown>
        </Container>
      </TodoItem>
  )
}

//-----------------------------------------------------------------------------
// Props
//-----------------------------------------------------------------------------
interface ITodoTags {
  todoId: ITodo['id']
}

//-----------------------------------------------------------------------------
// Styled Components
//-----------------------------------------------------------------------------
const Container = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
`

const Tags = styled.div`
  cursor: pointer;
  padding: ${ ({ padding }: ITags) => padding } 0;
  min-width: 1.5rem;
  display: flex;
  justify-content: flex-end;
  align-items: center;
`
interface ITags {
  padding: string
}

const DropdownContent = styled.div`
  padding: 0.75rem;
`

export default TodoTags
