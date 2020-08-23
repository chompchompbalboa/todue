//-----------------------------------------------------------------------------
// Imports
//-----------------------------------------------------------------------------
import axios from '@/api/axios'

//-----------------------------------------------------------------------------
// Actions
//-----------------------------------------------------------------------------
export const userLogin = async (email: string, password: string) => {
	return axios.post('/user/login', { email, password })
}

export const userLogout = async () => {
	return axios.post('/user/logout').then(response => {
		return response.data
	})
}

export const userRegister = async (name: string, email: string, password: string) => {
	return axios.post('/user/register', { name, email, password })
}

export const userRequestAccessToken = async (email: string, password: string) => {
	return axios.post('/oauth/token', { 
		grant_type: 'password',
		client_id: '91593722-5429-4a0d-a7d0-38845fa59afd',
		client_secret: '4Oq04JFIuT5DX6mkTekSAmz6tYQKJnEMPklmy224',
		username: email,
		password: password
	})
}
