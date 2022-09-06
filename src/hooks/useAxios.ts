import { useState, useEffect } from 'react';
import { AxiosError, AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios';
import { isAxiosError } from '../utils';

export type Method = 'head' | 'options' | 'get' | 'post' | 'put' | 'patch' | 'delete';

export type Config = {
  axiosInstance: AxiosInstance;
  method: Method;
  url: string;
  requestConfig: AxiosRequestConfig;
};

export const useAxios = () => {
  const [response, setResponse] = useState<AxiosResponse>();
  const [error, setError] = useState<AxiosError<BaseResponse>>();
  const [loading, setLoading] = useState<boolean>(false);
  const [controller, setController] = useState<AbortController>();

  const axiosFetch = async (config: Config) => {
    const { axiosInstance, method = 'get', url = '/', requestConfig = {} } = config;
    try {
      setLoading(true);
      const ctrl = new AbortController();
      setController(ctrl);
      const res = await axiosInstance[method](url, {
        ...requestConfig,
        signal: ctrl.signal,
      });
      console.log(res);
      setResponse(res.data);
    } catch (err: unknown) {
      if (isAxiosError<BaseResponse>(err)) {
        console.log(err.message);
        setError(err);
      }
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    return () => controller && controller.abort();
  }, [controller]);
  return [response, error, loading, axiosFetch];
};
export default useAxios;
