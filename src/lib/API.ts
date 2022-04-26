/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import axios, { AxiosInstance } from 'axios';
import { baseUrl } from '~/@types/common';

interface APIInstance extends AxiosInstance {
  get: (url: string, queryString?: any) => Promise<any>;
  post: (url: string, payload?: any, config?: any) => Promise<any>;
  put: (url: string, payload?: any, config?: any) => Promise<any>;
  delete: (url: string, config?: any) => Promise<any>;
}
class API {
  instance: APIInstance;

  constructor() {
    this.instance = axios.create({
      baseURL: baseUrl,
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      // withCredentials: true, // 인증정보 담아서 줄 때
    });

    this.instance.interceptors.response.use(
      response => {
        return response.data;
      },
      error => {
        return Promise.reject(error);
      },
    );
  }

  public async get(url: string, config?) {
    const res = await this.instance.get(url, config);

    return res;
  }

  public async post(url: string, payload?, config?) {
    const res = await this.instance.post(url, payload, config);
    return res;
  }

  public async put(url: string, payload?, config?) {
    const res = await this.instance.put(url, payload, config);
    return res;
  }

  public async delete(url: string, config?) {
    const res = await this.instance.delete(url, config);
    return res;
  }
}

export default API;
