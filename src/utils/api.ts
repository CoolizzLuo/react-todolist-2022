import { User } from '../store/AuthStore';

const BASE_URL = 'https://todoo.5xcamp.us/users/sign_in';

interface signInResponse {}

interface IApi {
  checkUser: () => Promise<void>;
  signIn: (email: string, password: string) => Promise<void>;
  signOut: () => Promise<void>;
  register: (email: string, password: string, nickname: string) => Promise<void>;
}

const api = {
  check: async () => fetch(BASE_URL),
};

export default api;
