//-----------------------------------------------------------------------------
// Imports
//-----------------------------------------------------------------------------
import axiosDefault from 'axios'

//-----------------------------------------------------------------------------
// Attach tokens to request
//-----------------------------------------------------------------------------
let axiosWithToken = axiosDefault

const accessToken: HTMLMetaElement | null = document.querySelector('meta[name="access-token"]')
const csrfToken: HTMLMetaElement | null = document.querySelector('meta[name="csrf-token"]')

if (axiosWithToken?.defaults?.headers?.common) {
  // Api access token
  if(accessToken) {
    axiosWithToken.defaults.headers.common['Accept'] = 'application/json'
    axiosWithToken.defaults.headers.common['Authorization'] = 'Bearer ' + accessToken.content
  }

  // CSRF token
  axiosWithToken.defaults.headers.common['X-CSRF-TOKEN'] = csrfToken !== null ? csrfToken.content : null
  axiosWithToken.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest'
}

export default axiosWithToken
