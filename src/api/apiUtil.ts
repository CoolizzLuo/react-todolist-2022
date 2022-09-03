import axios, { AxiosInstance, AxiosResponse } from 'axios';
import { useAuthStore } from '../store/authStore';

const BASE_URL = 'https://todoo.5xcamp.us';
export const _axios: AxiosInstance = axios.create({
  baseURL: BASE_URL,
  headers: {
    'content-type': 'application/json',
    Accept: 'application/json',
  },
});

export type BaseResponse = {
  message: string;
};

export const apiClient = () => {
  const token = useAuthStore.getState().authState?.token;
  _axios.defaults.headers.common['Authorization'] = token || '';

  return _axios;
};

const authExpiredErrorCodes = [401, 0];
const onFulfilled = (response: AxiosResponse) => response;
const onRejected = (error: any) => {
  if (authExpiredErrorCodes.includes(error.response.status)) {
    useAuthStore.getState().clearAuthState();
  }
  return Promise.reject(error);
};

_axios.interceptors.response.use(onFulfilled, onRejected);
