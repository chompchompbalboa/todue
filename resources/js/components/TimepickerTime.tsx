//-----------------------------------------------------------------------------
// Imports
//-----------------------------------------------------------------------------
import React from 'react'
import styled from 'styled-components'

//-----------------------------------------------------------------------------
// Component
//-----------------------------------------------------------------------------
export const TimepickerTime = ({
  index,
  isActiveDropdownOption,
  handleTimeClick,
  setActiveDropdownOptionIndex,
  time
}: ITimepickerTime) => {
  return (
      <Container
        isActiveDropdownOption={isActiveDropdownOption}
        onClick={() => handleTimeClick()}
        onMouseEnter={() => setActiveDropdownOptionIndex(index)}
        time={time}>
        {time || 'Clear'}
      </Container>
  )
}

//-----------------------------------------------------------------------------
// Props
//-----------------------------------------------------------------------------
interface ITimepickerTime {
  index: number
  isActiveDropdownOption: boolean
  handleTimeClick(): void
  setActiveDropdownOptionIndex(nextActiveDropdownOptionIndex: number): void
  time: string
}

//-----------------------------------------------------------------------------
// Styled Components
//-----------------------------------------------------------------------------
const Container = styled.div`
  cursor: pointer;
  padding: 0.125rem 0.25rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: ${ ({ isActiveDropdownOption }: IContainer ) => isActiveDropdownOption ? 'rgb(240, 240, 240)' : 'auto' };
  color: ${ ({ time }: IContainer ) => time ? 'black' : 'rgb(100, 100, 100)' };
  &:hover {
    background-color: rgb(240, 240, 240);
  }
`
interface IContainer {
  isActiveDropdownOption: boolean
  time: string
}

export default TimepickerTime
