import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios';
import { useAuthStore } from '../store/authStore';
import { usePopupStore } from '../store/popupStore';
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

apiClient.interceptors.request.use(onSend);
apiClient.interceptors.response.use(onFulfilled, onRejected);
