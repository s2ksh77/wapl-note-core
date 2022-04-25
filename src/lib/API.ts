/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import axios, { AxiosInstance } from 'axios';
import { baseUrl } from '~/@types/common';

class API {
  instance: AxiosInstance;

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

  public async get(url: string, queryString?) {
    const res = await this.instance.get(url, queryString);

    return res;
  }

  public async post(url: string, payload?) {
    const res = await this.instance.post(url, payload);
    return res;
  }

  public async put(url: string, payload?: any, queryString?) {
    const res = await this.instance.put(url, payload, queryString);
    return res;
  }

  public async delete(url: string) {
    const res = await this.instance.delete(url);
    return res;
  }
}

export default API;
