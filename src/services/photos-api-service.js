import config from '../config';
import TokenService from './token-service';

const PhotosService = {
  getPhotos () {
    return fetch(config.REACT_APP_API_ENDPOINT + '/photos', {
      method: 'GET',
      headers: {
        authorization: `Bearer ${TokenService.getAuthToken()}`,
      }
    }) 
      .then(res => 
        (!res.ok)
          ? res.json().then(e => Promise.reject(e))
          : res.json()
          )
  }
}

export default PhotosService;