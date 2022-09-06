import axios, { AxiosError } from 'axios';

export const convertBoolean2Number = (value: any) => (!!value ? 1 : 0);

export const createGetObjKeyByValue = (obj: object) => (value: string) => {
  const indexOfS = Object.values(obj).indexOf(value as unknown as typeof obj);
  const key = Object.keys(obj)[indexOfS];

  return key;
};

export const isAxiosError = <ResponseType>(error: unknown): error is AxiosError<ResponseType> => {
  return axios.isAxiosError(error);
};
