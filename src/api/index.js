import request from './request';
import { useQuery } from 'react-query';

export const getStocks = () => useQuery('stocks', () => request('/stocks'));
