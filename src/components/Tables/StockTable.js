import React from 'react';
import Loader from './TableLoader';
import { getStocks } from '@api';

export default function StockTable() {
  const stocks = getStocks();

  return (
    <div className='w-full'>
      <div className='w-full flex justify-between items-center pl-2 md:pl-0 mb-8 md:mb-10'>
        <h2 className='text-black-900 text-xl font-semibold font-head'>
          Stocks
        </h2>
        <a
          href='#'
          className='text-primary-100 bg-indigo-100 px-4 py-1 rounded'>
          Buy New
        </a>
      </div>
      <table className='w-full'>
        <tbody>
          {stocks.data && Array.isArray(stocks.data.data) ? (
            stocks.data.data.map(({ id, attributes }) => (
              <tr key={id}>
                <td>{attributes.name}</td>
                <td className='text-right'>
                  <span className='text-primary-500 bg-gray-600 px-1 py-1 text-sm  rounded mr-2'>
                    £{Math.ceil(attributes.price)}
                  </span>
                  <span className='text-green text-head text-sm md:text-base font-medium md:font-bold'>
                    {attributes.rate_change_percent}%
                  </span>
                </td>
              </tr>
            ))
          ) : (
            <Loader />
          )}
        </tbody>
      </table>
    </div>
  );
}
