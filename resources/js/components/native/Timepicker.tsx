//-----------------------------------------------------------------------------
// Imports
//-----------------------------------------------------------------------------
import React from 'react'
import { Picker } from '@react-native-community/picker'

import datetime from '@/utils/datetime'

//-----------------------------------------------------------------------------
// Component
//-----------------------------------------------------------------------------
export const Timepicker = ({
  label = '',
  onTimeChange = () => null,
  value = ''
}: ITimepicker) => {
  
  // Handle Time Change
  const handleTimeChange = (nextTimeTwelveHour: string) => {
    const nextTime = datetime.twelveHourToTwentyFourHour(nextTimeTwelveHour)
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
  
  const times = getTimes().map(time => (
    <Picker.Item
      key={time}
      label={time}
      value={time}/>
  ))

  return (
      <Picker
        selectedValue={value ? datetime.twentyFourHourToTwelveHour(value) : label}
        onValueChange={handleTimeChange}>
          {times}
      </Picker>
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

export default Timepicker
