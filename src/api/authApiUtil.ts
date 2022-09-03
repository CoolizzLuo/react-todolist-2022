import { AxiosResponse } from 'axios';
import { apiClient, BaseResponse } from './apiUtil';

type SignInRequest = {
  email: string;
  password: string;
};

type SignInResponse = {
  message: string;
  nickname: string;
  email: string;
};

type SignUpRequest = {
  email: string;
  nickname: string;
  password: string;
};

type SignUpResponse = {
  message: string;
  nickname: string;
  email: string;
};

interface IAuthApiUtil {
  checkUser: () => Promise<AxiosResponse<BaseResponse>>;
  signIn: (req: SignInRequest) => Promise<AxiosResponse<SignInResponse | BaseResponse>>;
  signOut: () => Promise<AxiosResponse<BaseResponse>>;
  register: (req: SignUpRequest) => Promise<AxiosResponse<SignUpResponse | BaseResponse>>;
}

const authApiUtil: IAuthApiUtil = {
  checkUser: async () => await apiClient().get('/check'),
  signIn: async (req) => await apiClient().post('/users/sign_in', { user: req }),
  signOut: async () => await apiClient().delete('/users/sign_out'),
  register: async (req) => await apiClient().post('/users', { user: req }),
};

export { authApiUtil };
