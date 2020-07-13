//-----------------------------------------------------------------------------
// Imports
//-----------------------------------------------------------------------------
import React, { useState } from 'react'
import moment from 'moment'
import styled from 'styled-components'

import { ARROW_LEFT, ARROW_RIGHT } from '@/assets/icons'

import Icon from '@/components/Icon'

//-----------------------------------------------------------------------------
// Component
//-----------------------------------------------------------------------------
export const Datepicker = ({
  onDateChange,
  value,
}: IDatepickerProps) => {

  // State
  const [ currentMonth, setCurrentMonth ] = useState(moment(value))

  // Build the array to display the dates
  let currentMonthDatesArray = []
  const isValueInCurrentMonth = currentMonth.year() === moment(value).year() && currentMonth.month() === moment(value).month()
  const valueDate = moment(value).date()
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
        <ChangeCurrentMonth
          onClick={() => setCurrentMonth(moment(currentMonth).subtract(1, 'M'))}>
          <Icon
            icon={ARROW_LEFT}/>
        </ChangeCurrentMonth>
        <CurrentMonth>
          {currentMonth.format('MMMM YYYY')}
        </CurrentMonth>
        <ChangeCurrentMonth
          onClick={() => setCurrentMonth(moment(currentMonth).add(1, 'M'))}>
          <Icon
            icon={ARROW_RIGHT}/>
        </ChangeCurrentMonth>
      </DatepickerHeader>
      <DatepickerDates>
        {currentMonthDatesArray.map((currentDate, index) =>
          <DatepickerDate
            key={index}
            isEmpty={currentDate === null}
            isSelected={isValueInCurrentMonth && valueDate === currentDate}
            onClick={() => onDateChange(moment(currentMonth).date(currentDate).format())}>
            {currentDate}
          </DatepickerDate>
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
  value: string
}

//-----------------------------------------------------------------------------
// Styled Components
//-----------------------------------------------------------------------------
const Container = styled.div`
  width: 15rem;
`

const DatepickerHeader = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const ChangeCurrentMonth = styled.div`
  cursor: pointer;
  padding: 0.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  &:hover {
    background-color: rgb(240, 240, 240);
  }
`

const CurrentMonth = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
`

const DatepickerDates = styled.div`
  margin: 0.25rem;
  width: 15rem;
  display: flex;
  flex-flow: row wrap;
`

const DatepickerDate = styled.div`
  cursor: pointer;
  width: calc(15rem / 7);
  height: calc(15rem / 7);
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 2px;
  background-color: ${ ({ isSelected }: IDatePickerDate) => isSelected ? 'rgb(0, 100, 0)' : 'transparent'};
  color: ${ ({ isSelected }: IDatePickerDate) => isSelected ? 'white' : 'inherit'};
  &:hover {
    background-color: ${ ({ isEmpty, isSelected }: IDatePickerDate) => isSelected ? 'rgb(0, 100, 0)' : (isEmpty ? 'transparent' : 'rgb(240, 240, 240)')};
  }
`
interface IDatePickerDate {
  isEmpty: boolean
  isSelected: boolean
}

//-----------------------------------------------------------------------------
// Export
//-----------------------------------------------------------------------------
export default Datepicker
