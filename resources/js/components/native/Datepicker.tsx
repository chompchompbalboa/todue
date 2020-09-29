//-----------------------------------------------------------------------------
// Imports
//-----------------------------------------------------------------------------
import React, { useState, useEffect } from 'react'
import moment from 'moment'
import styled from 'styled-components/native'

import { EvilIcons } from '@expo/vector-icons'

//-----------------------------------------------------------------------------
// Component
//-----------------------------------------------------------------------------
export const Datepicker = ({
  onDateChange,
  value = moment().format(),
}: IDatepickerProps) => {

  // State
  const [ currentMonth, setCurrentMonth ] = useState(value ? moment(value) : moment())
  const [ localValue, setLocalValue ] = useState(value)

  // Update localValue as needed
  useEffect(() => {
    setLocalValue(value)
  }, [ value ])

  // Build the array to display the dates
  let currentMonthDatesArray = []
  const isValueInCurrentMonth = currentMonth.year() === moment(value).year() && currentMonth.month() === moment(value).month()
  const isCurrentMonthTodaysMonth = currentMonth.year() === moment().year() && currentMonth.month() === moment().month()
  const todaysDate = moment().date()
  const localValueDate = moment(localValue).date()
  let daysInCurrentMonth = currentMonth.daysInMonth()
  const firstDayOfCurrentMonth = currentMonth.startOf('month').day()
  let previousMonthsDate = 0
  while(previousMonthsDate < firstDayOfCurrentMonth) {
    currentMonthDatesArray.push(null)
    previousMonthsDate++
  }
  for(let currentDate = 1; currentDate <= daysInCurrentMonth; currentDate++) {
    currentMonthDatesArray.push(currentDate)
  }

  return (
    <Container>
      <DatepickerHeader>
        <Touchable
          onPress={() => setCurrentMonth(moment(currentMonth).subtract(1, 'M'))}>
          <GoToPreviousMonth>
            <EvilIcons 
              name="chevron-left" 
              size={45}
              color="black"/>
          </GoToPreviousMonth>
        </Touchable>
        <CurrentMonth>
          {currentMonth.format('MMMM YYYY')}
        </CurrentMonth>
        <Touchable
          onPress={() => setCurrentMonth(moment(currentMonth).add(1, 'M'))}>
          <GoToNextMonth>
            <EvilIcons 
              name="chevron-right" 
              size={45}
              color="black"/>
          </GoToNextMonth>
        </Touchable>
      </DatepickerHeader>
      <DatepickerDates>
        {currentMonthDatesArray.map((currentDate, index) =>
          <Touchable
            key={index}
            onPress={() => {
              if(currentDate) {
                setLocalValue(moment(currentMonth).date(currentDate).format())
                setTimeout(() => {
                  onDateChange(moment(currentMonth).date(currentDate).format())
                }, 50)
              }
            }}>
            <DatepickerDateView
              isSelected={isValueInCurrentMonth && localValueDate === currentDate}
              isTodaysDate={isCurrentMonthTodaysMonth && currentDate === todaysDate}>
              <DatepickerDate
                isSelected={isValueInCurrentMonth && localValueDate === currentDate}>
                {currentDate}
              </DatepickerDate>
            </DatepickerDateView>
          </Touchable>
        )}
      </DatepickerDates>
    </Container>
  )
}

//-----------------------------------------------------------------------------
// Props
//-----------------------------------------------------------------------------
export interface IDatepickerProps {
  onDateChange(nextDate: string): void
  value: string | null
}

//-----------------------------------------------------------------------------
// Styled Components
//-----------------------------------------------------------------------------
const Container = styled.View`
  width: 100%;
`

const DatepickerHeader = styled.View`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`

const Touchable = styled.TouchableWithoutFeedback``

const ChangeCurrentMonth = styled.View`
  padding: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
`

const GoToPreviousMonth = styled(ChangeCurrentMonth)`
  border-top-left-radius: 5px;
`

const GoToNextMonth = styled(ChangeCurrentMonth)`
  border-top-right-radius: 5px;
`

const CurrentMonth = styled.Text`
  display: flex;
  font-size: 20px;
  font-family: OpenSans_600SemiBold;
  justify-content: center;
  align-items: center;
  text-align: center;
`

const DatepickerDates = styled.View`
  margin: 1px;
  width: 100%;
  display: flex;
  flex-flow: row wrap;
`

const DatepickerDateView = styled.View`
  width: 14.25%;
  padding: 8px 0;
  justify-content: center;
  align-items: center;
  border-radius: 100px;
  background-color: ${ ({ isSelected, isTodaysDate }: IDatePickerDateView) => isSelected ? 'rgb(0, 168, 25)' : (isTodaysDate ? 'rgb(238, 238, 238)' : 'transparent')};
`
interface IDatePickerDateView {
  isSelected: boolean
  isTodaysDate: boolean
}

const DatepickerDate = styled.Text`
  font-size: 19px;
  font-family: OpenSans_400Regular;
  color: ${ ({ isSelected }: IDatePickerDate) => isSelected ? 'white' : 'black'};
`
interface IDatePickerDate {
  isSelected: boolean
}

//-----------------------------------------------------------------------------
// Export
//-----------------------------------------------------------------------------
export default Datepicker
