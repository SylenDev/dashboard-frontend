import axios from 'axios';

export default class APIFactory {
  static createAPI() {
    return axios.create({
      baseURL: 'http://localhost:3000',
    });
  }

}


function transformParamsToString(params) {
  return Object.keys(params).map(key => `${key}=${params[key]}`).join('&');
}