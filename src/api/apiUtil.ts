import axios, { AxiosRequestConfig, AxiosResponse } from 'axios';
import useAuthStore from '../store/authStore';
import useLoadingStore from '../store/loadingStore';
import { BASE_URL } from '../constant';

export const apiClient = axios.create({
  baseURL: BASE_URL,
  headers: {
    'content-type': 'application/json',
    Accept: 'application/json',
  },
});

const authExpiredErrorCodes = [401, 0];

const onSend = (config: AxiosRequestConfig) => {
  if (config?.headers) {
    const token = useAuthStore.getState().authState?.token;
    config.headers['Authorization'] = token || '';
  }

  useLoadingStore.getState().openLoading();
  return config;
};

const onFulfilled = (response: AxiosResponse) => {
  useLoadingStore.getState().closeLoading();
  return response;
};
const onRejected = (error: any) => {
  useLoadingStore.getState().closeLoading();
  if (authExpiredErrorCodes.includes(error.response.status)) {
    useAuthStore.getState().clearAuthState();
  }
  return Promise.reject(error);
};

apiClient.interceptors.request.use(onSend);
apiClient.interceptors.response.use(onFulfilled, onRejected);
