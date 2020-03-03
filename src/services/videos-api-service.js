import config from '../config';
import TokenService from './token-service';

const VideosService = {
  getVideos() {
    return fetch(`${config.REACT_APP_API_ENDPOINT}/videos`, {
      method: 'GET',
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

export default VideosService;