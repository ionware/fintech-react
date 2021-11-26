import React from 'react';
import { PageLayout, Container } from '@components/layouts';
import { StockChart } from '@components/Charts';
import './styles/app.css';

const App = () => {
  return (
    <PageLayout title='Buy and invest in stock holdings'>
      <main>
        <div>
          <StockChart />
        </div>
        <div className='flex flex-wrap lg:flex-nowrap my-5 justify-between'>
          <div className='w-full md:w-5/12 md:flex-grow lg:w-4/12 h-72 mt-4 mr-3 bg-primary-100' />
          <div className='w-full md:w-5/12 md:flex-grow lg:w-4/12 h-72 mt-4 mr-3 bg-primary-100' />
          <div className='w-full md:w-6/12 lg:w-4/12 h-72 mt-4 mr-3 bg-primary-100' />
        </div>
      </main>
    </PageLayout>
  );
};

export default App;
