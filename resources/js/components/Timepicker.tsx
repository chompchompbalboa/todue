//-----------------------------------------------------------------------------
// Imports
//-----------------------------------------------------------------------------
import React, { useRef, useState, useEffect } from 'react'
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
  value = ''
}: ITimepicker) => {
  
  // Refs
  const container = useRef(null)
  
  // State
  const [ activeDropdownOptionIndex, setActiveDropdownOptionIndex ] = useState(0)
  const [ inputValue, setInputValue ] = useState(value ? datetime.twentyFourHourToTwelveHour(value) : '')
  const [ isDropdownVisible, setIsDropdownVisible ] = useState(false)

  // Update the input value when the time changes
  useEffect(() => {
    if(value) {
      const twelveHourValue = datetime.twentyFourHourToTwelveHour(value)
      if(twelveHourValue !== inputValue) {
        setInputValue(twelveHourValue)
      }
    }
    else {
      setInputValue('')
    }
  }, [ value ])
  
  // Handle Time Change
  const handleTimeChange = () => {
    setIsDropdownVisible(false)
    const nextTime = datetime.twelveHourToTwentyFourHour(getTimes()[activeDropdownOptionIndex])
    if(nextTime !== value) {
      onTimeChange(nextTime)
    }
  }
  
  // Get Times
  const getTimes = () => {
    let times: string[] = [ null ]
    let currentHour = 0
    let currentMinute = 0
    while(currentHour <= 23 && currentMinute <= 45) {
      const twentyFourHourTime = (currentHour + '').padStart(2, '0') + ':' + (currentMinute + '').padStart(2, '0')
      const twelveHourTime = datetime.twentyFourHourToTwelveHour(twentyFourHourTime)
      times.push(twelveHourTime)
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
        <Time
          onClick={() => setIsDropdownVisible(true)}
          value={value}>
          {value ? datetime.twentyFourHourToTwelveHour(value) : label}
        </Time>
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
`

const Time = styled.div`
  cursor: pointer;
  font-size: 1rem;
  width: 5rem;
  text-align: center;
  color: ${ ({ value }: ITime) => value ? 'black' : 'rgb(100, 100, 100)' };
`
interface ITime {
  value: string
}

export default Timepicker
