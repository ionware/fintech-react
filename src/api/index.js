import request from './request';
import { useQuery } from 'react-query';

export const getStocks = () =>
  useQuery(
    'stocks',
    () =>
      new Promise((resolve) =>
        setTimeout(() => resolve(request('/stocks')), 5000)
      )
  );
