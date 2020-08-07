//-----------------------------------------------------------------------------
// Imports
//-----------------------------------------------------------------------------
import React, { ChangeEvent, useRef, useState } from 'react'
import styled from 'styled-components'

import datetime from '@/utils/datetime'

import DropdownWithOptions from '@/components/DropdownWithOptions'
import TimepickerTime from '@/components/TimepickerTime'

//-----------------------------------------------------------------------------
// Component
//-----------------------------------------------------------------------------
export const Timepicker = ({
  label = '',
  onTimeChange = () => null,
  value = 'Timepicker'
}: ITimepicker) => {
  
  // Refs
  const container = useRef(null)
  
  // State
  const [ activeDropdownOptionIndex, setActiveDropdownOptionIndex ] = useState(0)
  const [ inputValue, setInputValue ] = useState('')
  const [ isDropdownVisible, setIsDropdownVisible ] = useState(false)
  
  // Handle Input Blur
  const handleInputBlur = () => {
    onTimeChange(inputValue === '' ? null : datetime.twelveHourToTwentyFourHour(inputValue))
  }
  
  // Handle Time Change
  const handleTimeChange = () => {
    const nextTime = getTimes()[activeDropdownOptionIndex]
    onTimeChange(datetime.twelveHourToTwentyFourHour(nextTime))
  }
  
  // Get Times
  const getTimes = () => {
    let times = []
    let currentHour = 0
    let currentMinute = 0
    while(currentHour <= 23 && currentMinute <= 45) {
      const twentyFourHourTime = (currentHour + '').padStart(2, '0') + ':' + (currentMinute + '').padStart(2, '0')
      const twelveHourTime = datetime.twentyFourHourToTwelveHour(twentyFourHourTime)
      if(
        ['', null].includes(inputValue) || 
        twelveHourTime.split(' ').join().trim().toLowerCase().includes(inputValue.split(' ').join().trim().toLowerCase())
      ) {
        times.push(twelveHourTime)
      }
      if(currentMinute === 45) {
        currentHour++
        currentMinute = 0
      }
      else {
        currentMinute += 15
      }
    }
    return times
  }
  
  const times = getTimes()

  return (
      <Container
        ref={container}>
        <StyledInput
          onBlur={handleInputBlur}
          onChange={(e: ChangeEvent<HTMLInputElement>) => setInputValue(e.target.value)}
          onFocus={() => setIsDropdownVisible(true)}
          placeholder={label}
          value={inputValue || ''}/>
        <DropdownWithOptions
          activeDropdownOptionIndex={activeDropdownOptionIndex}
          closeDropdown={() => setIsDropdownVisible(false)}
          containerRef={container}
          dropdownOptions={times}
          isDropdownVisible={isDropdownVisible}
          selectDropdownOption={handleTimeChange}
          setActiveDropdownOptionIndex={setActiveDropdownOptionIndex}>
          {times.map((time, index) => (
            <TimepickerTime
              key={time}
              handleTimeClick={handleTimeChange}
              index={index}
              isActiveDropdownOption={activeDropdownOptionIndex === index}
              setActiveDropdownOptionIndex={setActiveDropdownOptionIndex}
              time={time}/>
          ))}
        </DropdownWithOptions>
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
  position: relative;
  padding: 0.75rem;
  padding-left: 0;
`

const StyledInput = styled.input`
  border: none;
  outline: none;
  width: 5rem;
  font-size: 1rem;
  background-color: transparent;
`

export default Timepicker
