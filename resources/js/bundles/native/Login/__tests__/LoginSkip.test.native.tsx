//-----------------------------------------------------------------------------
// Imports
//-----------------------------------------------------------------------------
import React from 'react'

import { 
  fireEvent,
  renderWithRedux 
} from '@/testing/native/library'

import AppRoot from '@native/App/AppRoot'

//-----------------------------------------------------------------------------
// Tests
//-----------------------------------------------------------------------------
describe('LoginSkip', () => {

  const loginSkip = () => {
    const { 
      getByTestId,
      queryByTestId 
    } = renderWithRedux(<AppRoot />)

    const loginSkipButton = getByTestId('LoginSkip')
    
    return {
      loginSkipButton,
      queryByTestId
    }
  }

  it("loads the app when clicked", async () => {
    const { loginSkipButton, queryByTestId } = loginSkip()
    expect(queryByTestId('Login')).toBeTruthy()
    fireEvent.press(loginSkipButton)
    expect(queryByTestId('Login')).not.toBeTruthy()
    expect(queryByTestId('App')).toBeTruthy()
  })

})
