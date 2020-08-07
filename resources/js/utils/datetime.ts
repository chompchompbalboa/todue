//-----------------------------------------------------------------------------
// 12 Hour Time to 24 Hour Time
//-----------------------------------------------------------------------------
export const twelveHourToTwentyFourHour = (twelveHourTime: string) => {
  if(twelveHourTime) {
    if(!twelveHourTime.includes(':')) {
      return null
    }
    else {
      const amOrPm = twelveHourTime.toLowerCase().includes('p') ? 'PM' : 'AM'
      const twelveHourTimeSplit = twelveHourTime.split(':')
      const currentTwelveHourHour = Number(twelveHourTimeSplit[0])
      const currentHour = amOrPm === 'PM' && currentTwelveHourHour !== 12 
        ? currentTwelveHourHour + 12 
        : amOrPm === 'AM' && currentTwelveHourHour === 12
          ? 0
          : currentTwelveHourHour
      const currentMinute = Number(twelveHourTimeSplit[1].toLowerCase().replace('a', '').replace('p', '').replace('m', ''))
      const twentyFourHourTime = (currentHour + '').padStart(2, '0') + ':' + (currentMinute + '').padStart(2, '0')
      return twentyFourHourTime
    }
  }
  return null
}

//-----------------------------------------------------------------------------
// 24 Hour Time to 12 Hour Time
//-----------------------------------------------------------------------------
export const twentyFourHourToTwelveHour = (twentyFourHourTime: string) => {
  if(twentyFourHourTime) {
    const twentyFourHourTimeSplit = twentyFourHourTime.split(':')
    if(twentyFourHourTimeSplit.length === 2) {
      const currentHour = Number(twentyFourHourTimeSplit[0])
      const currentMinute = Number(twentyFourHourTimeSplit[1])
      const hourInTwelveHour = currentHour === 0
        ? 12
        : currentHour >= 13
          ? currentHour - 12
          : currentHour
      const amOrPm = currentHour < 12 ? 'AM' : 'PM'
      const twelveHourTime =  (hourInTwelveHour + '') + ':' + (currentMinute + '').padStart(2, '0') + ' ' + amOrPm
      return twelveHourTime
    }
    return null
  }
  return null
}

export default {
  twelveHourToTwentyFourHour,
  twentyFourHourToTwelveHour
}