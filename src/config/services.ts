import Axios from 'axios';
import config from 'config';
import { QueryClient } from 'react-query';

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      retry: (failureCount: number, error: any) => {
        const status = Number(error?.response?.status);
        if (status === 401) {
          return false;
        }
        // 0,1,2 => 3 retry if fail
        if (failureCount === 2) {
          return false;
        }
        return true;
      },
    },
  },
});

//skip authorization
export const http = Axios.create({
  baseURL: config.API_URL,
});

export enum CharacterController {
  CHARACTER = '/character',
}
