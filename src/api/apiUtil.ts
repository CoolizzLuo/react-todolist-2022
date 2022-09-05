import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios';
import { useAuthStore } from '../store/authStore';
import { usePopupStore } from '../store/popupStore';

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

const onSend = (config: AxiosRequestConfig) => {
  usePopupStore.setState({ popup: 'loading' });
  return config;
};

const onFulfilled = (response: AxiosResponse) => {
  usePopupStore.getState().closePopup();
  return response;
};
const onRejected = (error: any) => {
  usePopupStore.getState().closePopup();
  if (authExpiredErrorCodes.includes(error.response.status)) {
    useAuthStore.getState().clearAuthState();
  }
  return Promise.reject(error);
};

_axios.interceptors.request.use(onSend);
_axios.interceptors.response.use(onFulfilled, onRejected);
