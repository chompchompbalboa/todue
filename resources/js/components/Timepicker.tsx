//-----------------------------------------------------------------------------
// Imports
//-----------------------------------------------------------------------------
import React, { ChangeEvent } from 'react'
import styled from 'styled-components'

//-----------------------------------------------------------------------------
// Component
//-----------------------------------------------------------------------------
export const Timepicker = ({
  label = '',
  onTimeChange = () => null,
  value = 'Timepicker'
}: ITimepicker) => {
  
  const selectOptions = () => {
    let options = []
    let currentHour = 0
    let currentMinute = 0
    options.push(
      <option 
        key={label}
        value="">
        {label}
      </option>
    )
    while(currentHour <= 23 && currentMinute <= 45) {
      const currentTime = (currentHour + '').padStart(2, '0') + ':' + (currentMinute + '').padStart(2, '0')
      options.push(
        <option 
          key={currentTime}
          value={currentTime}>
          {currentTime}
        </option>
      )
      if(currentMinute === 45) {
        currentHour++
        currentMinute = 0
      }
      else {
        currentMinute += 15
      }
    }
    return options
  }

  return (
      <Container>
        <label 
          htmlFor="timepicker">
          {label}
        </label>
        <select 
          name="timepicker"
          onChange={(e: ChangeEvent<HTMLSelectElement>) => onTimeChange(e.target.value === '' ? null : e.target.value)}
          value={value || ''}>
          {selectOptions()}
        </select>
      </Container>
  )
}

//-----------------------------------------------------------------------------
// Props
//-----------------------------------------------------------------------------
interface ITimepicker {
  label: string
  onTimeChange(nextTime: string): void
  value: string
}

//-----------------------------------------------------------------------------
// Styled Components
//-----------------------------------------------------------------------------
const Container = styled.div`
  width: 100%;
  height: 100%;
  padding: 0.75rem;
  padding-left: 0;
`

export default Timepicker
