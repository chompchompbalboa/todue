//-----------------------------------------------------------------------------
// Imports
//-----------------------------------------------------------------------------
import React from 'react'
import { Provider as ReduxProvider } from 'react-redux'
import { applyMiddleware, createStore } from 'redux'
import thunkMiddleware, { ThunkMiddleware } from 'redux-thunk'

import { appReducer, IAppState } from '@/state'

import App from '@native/App/App'

//-----------------------------------------------------------------------------
// Component
//-----------------------------------------------------------------------------
const Root = () => {

  const store = createStore(appReducer, applyMiddleware(thunkMiddleware as ThunkMiddleware<IAppState>))
  
  return (
    <ReduxProvider store={store}>
      <App />
    </ReduxProvider>
  )
}

export default Root
