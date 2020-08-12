//-----------------------------------------------------------------------------
// Imports
//-----------------------------------------------------------------------------
import React from 'react'

import { renderWithRedux } from '@/testing/library'

import App from '@web/App/App'

//-----------------------------------------------------------------------------
// Tests
//-----------------------------------------------------------------------------
describe('App', () => {

  it("renders correctly", async () => {
    const { queryByTestId } = renderWithRedux(<App />)
    expect(queryByTestId('App')).toBeTruthy()
  })

})
