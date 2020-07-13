//-----------------------------------------------------------------------------
// Imports
//-----------------------------------------------------------------------------
import React from 'react'
import moment from 'moment'
import styled from 'styled-components'

//-----------------------------------------------------------------------------
// Component
//-----------------------------------------------------------------------------
export const TodosTodoDate = ({
  dateString
}: ITodosTodoDate) => {
  
  const date = moment(dateString)
  
  return (
      <Container>
        {date.format('dddd MMMM Do')}{date.isSame(moment(), 'day') ? ' (Today)' : ''}
      </Container>
  )
}

//-----------------------------------------------------------------------------
// Props
//-----------------------------------------------------------------------------
interface ITodosTodoDate {
  dateString: string
}

//-----------------------------------------------------------------------------
// Styled Components
//-----------------------------------------------------------------------------
const Container = styled.div`
  cursor: default;
  font-size: 1.1rem;
  margin-top: 0.5rem;
  margin-bottom: 0.25rem;
  font-weight: bold;
`

export default TodosTodoDate
