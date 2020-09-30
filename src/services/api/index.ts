import axios, { AxiosResponse } from 'axios';
import { config } from './config';

const successRequestInterceptor = (response: AxiosResponse) => Promise.resolve(response);
const failRequestInterceptor = (response: AxiosResponse) => Promise.reject(response);

export const api = axios.create({
  baseURL: config.baseUrl,
  withCredentials: true,
});

api.interceptors.response.use(successRequestInterceptor, failRequestInterceptor);
