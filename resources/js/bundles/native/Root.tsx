//-----------------------------------------------------------------------------
// Imports
//-----------------------------------------------------------------------------
import React from 'react'
import { Provider as ReduxProvider } from 'react-redux'
import { applyMiddleware, createStore } from 'redux'
import thunkMiddleware, { ThunkMiddleware } from 'redux-thunk'

import { appReducer, IAppState } from '@/state'

import AppRoot from '@native/App/AppRoot'

//-----------------------------------------------------------------------------
// Component
//-----------------------------------------------------------------------------
const Root = () => {

  const store = createStore(appReducer, applyMiddleware(thunkMiddleware as ThunkMiddleware<IAppState>))
  
  return (
    <ReduxProvider store={store}>
      <AppRoot />
    </ReduxProvider>
  )
}

export default Root
