import React from 'react';

// import components
import Banner from './Banner';
import AppartmentList from './AppartmentsList';

const Home = () => {
  return (
    <div className='min-h-[1800px]'>
      <Banner />
      <AppartmentList />
    </div>
  );
};

export default Home;
