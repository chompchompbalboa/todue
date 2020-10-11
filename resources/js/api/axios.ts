//-----------------------------------------------------------------------------
// Imports
//-----------------------------------------------------------------------------
import axios from 'axios'
import AsyncStorage from '@react-native-community/async-storage'

import defaultInitialData from '@/state/initialData'

//-----------------------------------------------------------------------------
// Initial Data
//-----------------------------------------------------------------------------
let axiosExport = axios
const isWeb = typeof initialData !== 'undefined'
const loadedInitialData = isWeb ? initialData : defaultInitialData

//-----------------------------------------------------------------------------
// Attach tokens to request
//-----------------------------------------------------------------------------
export async function attachTokensToRequest() {
  if (axiosExport?.defaults?.headers?.common) {
    axiosExport.defaults.headers.common['Accept'] = 'application/json'
    axiosExport.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest'
    if(isWeb) {
      // CSRF token
      const csrfToken: string = loadedInitialData.csrfToken
      axiosExport.defaults.headers.common['X-CSRF-TOKEN'] = csrfToken !== null ? csrfToken : null
      // Access token
      const accessToken: string = loadedInitialData.accessToken
      if(accessToken) {
        axiosExport.defaults.headers.common['Authorization'] = 'Bearer ' + accessToken
      }
    }
    else {
      const accessToken = await AsyncStorage.getItem('@todue/accessToken')
      if(accessToken) {
        axiosExport.defaults.headers.common['Authorization'] = 'Bearer ' + accessToken
      }
    }
  }
}

//-----------------------------------------------------------------------------
// Set the base url
//-----------------------------------------------------------------------------
function setBaseUrl() {
  if(axiosExport.defaults) {
    if(typeof __DEV__ !== 'undefined' && __DEV__ && !isWeb) {
      axiosExport.defaults.baseURL = 'https://0cb93a9fb6a9.ngrok.io'
    }
    else if (!isWeb) {
      axiosExport.defaults.baseURL = 'https://todue.app'
    }
  }
}

attachTokensToRequest()
setBaseUrl()

export default axiosExport
