
// main container containing all the required section

import React from 'react';
import HomeBanner from './HomeBanner';
import SliderBar from './SliderBar';
import Features from './Features';
import University from './University';
import BottomBanner from './BottomBanner';
import Footer from './Footer';

function MainContainer() {
  return (
    <div className='w-full h-auto flex flex-col'>
      <HomeBanner />
      <SliderBar />
      <Features />
      <University />
      <BottomBanner />
      <Footer />
    </div>
  )
}

export default MainContainer;