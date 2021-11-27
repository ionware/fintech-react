import React from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import { PageLayout } from '@components/layouts';
import { StockChart } from '@components/Charts';
import { StockTable, OptionTable } from '@components/Tables';
import 'react-loading-skeleton/dist/skeleton.css';
import './styles/app.css';

const App = () => {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <PageLayout title='Buy and invest in stock holdings'>
        <main>
          <div>
            <StockChart />
          </div>
          <div className='flex flex-wrap lg:flex-nowrap my-5 justify-between'>
            <div className='w-full md:w-5/12 md:flex-grow lg:w-3/12 mt-4 mr-3 lg:mr-16 px-4 py-6'>
              <StockTable />
            </div>
            <div className='w-full md:w-5/12 md:flex-grow lg:w-3/12 mt-4 mr-3 lg:mr-16 py-6'>
              <OptionTable />
            </div>
            <div className='w-full md:w-6/12 lg:w-3/12 h-72 mt-4 mr-3 bg-primary-100 py-6' />
          </div>
        </main>
      </PageLayout>
    </QueryClientProvider>
  );
};

export default App;
