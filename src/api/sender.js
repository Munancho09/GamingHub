import qs from 'qs';
import axios from 'axios';

export default class Sender {
  constructor (baseURL = '', headers = {}) {
    this.sender = axios.create({
      baseURL,
      timeout: 25000,
      headers,
    });
  }

  async get (url, params, options) {
    console.log('get', params, options);
    
    params = qs.stringify(params, { arrayFormat: 'index', skipNulls: true });

    console.log(params);
    
    const optionsArg = { ...this.options, ...options };
    const urlArg = `${url}${params ? `?${params}` : ''}`;
    return await this.asyncWrapper(this.sender.get, urlArg, optionsArg);
  }
  
  async asyncWrapper (asyncMethod, ...args) {
    return await asyncMethod(...args);
  }
}