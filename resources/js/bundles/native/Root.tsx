//-----------------------------------------------------------------------------
// Imports
//-----------------------------------------------------------------------------
import React from 'react'
import { YellowBox } from 'react-native'
import AsyncStorage from '@react-native-community/async-storage'
import { persistStore, persistReducer } from 'redux-persist'
import { PersistGate } from 'redux-persist/integration/react'
import { Provider as ReduxProvider } from 'react-redux'
import { applyMiddleware, createStore } from 'redux'
import thunkMiddleware, { ThunkMiddleware } from 'redux-thunk'

// TODO: Change this import so that it bundles the fonts with the app
// rather than downloading them at runtime (https://github.com/expo/google-fonts)
import {
  useFonts,
  OpenSans_400Regular,
  OpenSans_400Regular_Italic,
  OpenSans_600SemiBold,
  OpenSans_700Bold,
  OpenSans_700Bold_Italic
} from '@expo-google-fonts/dev'

import { appReducer, IAppState } from '@/state'

import AppRoot from '@native/App/AppRoot'

YellowBox.ignoreWarnings([
  'Require cycle:'
])

//-----------------------------------------------------------------------------
// Redux Persist
//-----------------------------------------------------------------------------
const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  whitelist: [] as string[]
}
const persistedReducer = persistReducer(persistConfig, appReducer)
const store = createStore(persistedReducer, applyMiddleware(thunkMiddleware as ThunkMiddleware<IAppState>))
const persistedStore = persistStore(store)

//-----------------------------------------------------------------------------
// Component
//-----------------------------------------------------------------------------
const Root = () => {

  const [ fontsLoaded ] = useFonts({ 
    OpenSans_400Regular, 
    OpenSans_400Regular_Italic,
    OpenSans_600SemiBold,
    OpenSans_700Bold,
    OpenSans_700Bold_Italic
  })

  if(fontsLoaded) {
    return (
      <ReduxProvider 
        store={store}>
        <PersistGate 
          loading={null}
          persistor={persistedStore}>
          <AppRoot />
        </PersistGate>
      </ReduxProvider>
    )
  }
  return null
}

export default Root
