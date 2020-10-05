//-----------------------------------------------------------------------------
// Imports
//-----------------------------------------------------------------------------
import React from 'react'
import styled from 'styled-components/native'

import datetime from '@/utils/datetime'

import { Picker } from '@react-native-community/picker'

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
    let times: { label: string, value: string }[] = []
    let currentHour = 0
    let currentMinute = 0
    let isLabelInsertedIntoTimes = false
    while(currentHour <= 23 && currentMinute <= 45) {
      if(currentHour === 12 && currentMinute === 0 && !isLabelInsertedIntoTimes) {
        times.push({
          label: "-",
          value: null
        })
        isLabelInsertedIntoTimes = true
      }
      else {
        const twentyFourHourTime = (currentHour + '').padStart(2, '0') + ':' + (currentMinute + '').padStart(2, '0')
        const twelveHourTime = datetime.twentyFourHourToTwelveHour(twentyFourHourTime)
        times.push({
          label: twelveHourTime,
          value: twelveHourTime
        })
        if(currentMinute === 45) {
          currentHour++
          currentMinute = 0
        }
        else {
          currentMinute += 15
        }
      }
    }
    return times
  }
  
  const times = getTimes().map(({ label, value }) => (
    <Picker.Item
      key={label}
      label={label}
      value={value}/>
  ))

  return (
    <Container>
      <Label>{label}:</Label>
      <Picker
        onValueChange={handleTimeChange}
        selectedValue={value ? datetime.twentyFourHourToTwelveHour(value) : null}
        itemStyle={{
          fontFamily: 'OpenSans_400Regular'
        }}
        style={{
          flexGrow: 1,
          marginLeft: 20
        }}>
          {times}
      </Picker>
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
const Container = styled.View`
  width: 100%;
  flex-direction: row;
  align-items: center;
`

const Label = styled.Text`
  font-family: OpenSans_600SemiBold;
  font-size: 18px;
`

export default Timepicker
