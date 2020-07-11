//-----------------------------------------------------------------------------
// Imports
//-----------------------------------------------------------------------------
import axios from 'axios'

//-----------------------------------------------------------------------------
// Attach tokens to request
//-----------------------------------------------------------------------------
let axiosWithTokens = axios

const accessToken: HTMLMetaElement | null = document.querySelector('meta[name="access-token"]')
const csrfToken: HTMLMetaElement | null = document.querySelector('meta[name="csrf-token"]')

if (axiosWithTokens?.defaults?.headers?.common) {
  // Api access token
  if(accessToken) {
    axiosWithTokens.defaults.headers.common['Accept'] = 'application/json'
    axiosWithTokens.defaults.headers.common['Authorization'] = 'Bearer ' + accessToken.content
  }

  // CSRF token
  axiosWithTokens.defaults.headers.common['X-CSRF-TOKEN'] = csrfToken !== null ? csrfToken.content : null
  axiosWithTokens.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest'
}

export default axiosWithTokens
