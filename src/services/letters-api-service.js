import config from '../config';
import TokenService from './token-service';

const LettersService = {
  getLetters: () => {
    return fetch(config.REACT_APP_API_ENDPOINT + '/letters', {
      method: 'GET',
      headers: { 
        authorization: `Bearer ${TokenService.getAuthToken()}`
      }
    })
      .then(res => 
        !res.ok
          ? res.json().then(e => Promise.reject(e))
          : res.json()
        )
  }
};

export default LettersService;