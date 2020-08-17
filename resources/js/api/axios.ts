//-----------------------------------------------------------------------------
// Imports
//-----------------------------------------------------------------------------
import axios from 'axios'

import defaultInitialData from '@/state/initialData'

const loadedInitialData = typeof initialData !== 'undefined' ? initialData : defaultInitialData
//-----------------------------------------------------------------------------
// Attach tokens to request
//-----------------------------------------------------------------------------
let axiosWithTokens = axios

const accessToken: string = loadedInitialData.accessToken
const csrfToken: string = loadedInitialData.csrfToken

if (axiosWithTokens?.defaults?.headers?.common) {
  // Api access token
  if(accessToken) {
    axiosWithTokens.defaults.headers.common['Accept'] = 'application/json'
    axiosWithTokens.defaults.headers.common['Authorization'] = 'Bearer ' + accessToken
  }

  // CSRF token
  axiosWithTokens.defaults.headers.common['X-CSRF-TOKEN'] = csrfToken !== null ? csrfToken : null
  axiosWithTokens.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest'
}

export default axiosWithTokens
