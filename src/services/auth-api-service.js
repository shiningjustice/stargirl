import config from './../config';
import TokenService from './token-service'

const authApiService = {
  postLogin({username, password}) {
    return fetch(`${config.REACT_APP_API_ENDPOINT}/auth`, {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify({ username, password })
    })
      .then(res => 
        (!res.ok)
          ? res.json().then(e => Promise.reject(e))
          : res.json()
        )
  }, 
  refreshToken() {
    return fetch(`${config.REACT_APP_API_ENDPOINT}/auth`, {
      method: 'PUT',
      headers: {
        authorization: `Bearer ${TokenService.getAuthToken()}`
      }
    })
      .then(res => 
        (!res.ok)
          ? res.json().then(e => Promise.reject(e))
          : res.json()
        )
  }
}

export default authApiService;