
// homepage

import React from 'react';
import Navbar from './Navbar';
import MainContainer from './MainContainer';

function HomePage() {
  return (
    <div className='w-full flex flex-col min-h-screen h-auto'>
        <Navbar />
        <MainContainer /> 
    </div>
  )
}

export default HomePage;