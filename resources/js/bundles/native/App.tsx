//-----------------------------------------------------------------------------
// Imports
//-----------------------------------------------------------------------------
import React from 'react'
import { Provider as ReduxProvider } from 'react-redux'
import { applyMiddleware, createStore } from 'redux'
import thunkMiddleware, { ThunkMiddleware } from 'redux-thunk'
import styled from 'styled-components/native'

import { appReducer, IAppState } from '@/state'

//-----------------------------------------------------------------------------
// Component
//-----------------------------------------------------------------------------
const App = () => {

  const store = createStore(appReducer, applyMiddleware(thunkMiddleware as ThunkMiddleware<IAppState>))
  return (
    <ReduxProvider store={store}>
      <Container>
        This still works
      </Container>
    </ReduxProvider>
  )
}

const Container = styled.Text``

export default App
