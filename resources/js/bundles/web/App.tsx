//-----------------------------------------------------------------------------
// Imports
//-----------------------------------------------------------------------------
import React from 'react'
import ReactDOM from 'react-dom'
import { Provider as ReduxProvider } from 'react-redux'
import { applyMiddleware, createStore } from 'redux'
import thunkMiddleware, { ThunkMiddleware } from 'redux-thunk'
import { appReducer, IAppState } from '@/state'

import App from '@web/App/App'

//-----------------------------------------------------------------------------
// Component
//-----------------------------------------------------------------------------
const AppRoot = () => {

  const store = createStore(appReducer, applyMiddleware(thunkMiddleware as ThunkMiddleware<IAppState>))
  
  return (
    <ReduxProvider store={store}>
      <App />
    </ReduxProvider>
  )
}

//-----------------------------------------------------------------------------
// Mount to DOM
//-----------------------------------------------------------------------------
if (document.getElementById('react-container')) {
	ReactDOM.render(<AppRoot />, document.getElementById('react-container'))
}
